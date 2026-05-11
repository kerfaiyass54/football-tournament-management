package com.kerfaiyassine.team.services;

import com.kerfaiyassine.team.clients.ManagerClient;
import com.kerfaiyassine.team.clients.PlayerClient;
import com.kerfaiyassine.team.entities.Team;
import com.kerfaiyassine.team.kafka.StadiumOperationMessage;
import com.kerfaiyassine.team.repositories.TeamRepository;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class TeamManagementService {

    private final PlayerClient playerClient;

    private final ManagerClient managerClient;

    private final KafkaTemplate<String, StadiumOperationMessage> kafkaTemplate;

    private final TeamRepository teamRepository;

    public TeamManagementService(
            PlayerClient playerClient,
            ManagerClient managerClient,
            KafkaTemplate<String, StadiumOperationMessage> kafkaTemplate,
            TeamRepository teamRepository
    ) {
        this.playerClient = playerClient;
        this.managerClient = managerClient;
        this.kafkaTemplate = kafkaTemplate;
        this.teamRepository = teamRepository;
    }

    public Object getPlayers(String teamId) {

        return playerClient.getTeamPlayers(teamId);
    }

    public Object releasePlayer(String playerId) {

        return playerClient.releasePlayer(playerId);
    }

    public Object movePlayerToYouth(String playerId) {

        return playerClient.moveToYouth(playerId);
    }

    public Object renewPlayerContract(long contractId) {

        return playerClient.renewContract(contractId);
    }

    public Object renewManagerCareer(String careerId) {

        return managerClient.renewCareer(careerId);
    }

    public Object sackManager(String careerId) {

        return managerClient.sackManager(careerId);
    }

    public String requestStadiumOperation(
            StadiumOperationMessage message
    ) {

        kafkaTemplate.send(
                "stadium-operation-topic",
                message
        );

        return "Operation request sent successfully";
    }

    public Team getTeam(String teamId) {

        return teamRepository.findById(teamId)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Team not found"
                        )
                );
    }
}