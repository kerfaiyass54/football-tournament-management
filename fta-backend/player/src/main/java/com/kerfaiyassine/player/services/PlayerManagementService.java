package com.kerfaiyassine.player.services;

import com.kerfaiyassine.player.entities.Contract;
import com.kerfaiyassine.player.entities.Player;
import com.kerfaiyassine.player.enums.ContractStatus;
import com.kerfaiyassine.player.enums.PlayerPosition;
import com.kerfaiyassine.player.enums.PlayerSituation;
import com.kerfaiyassine.player.enums.PlayerStatus;
import com.kerfaiyassine.player.repositories.ContractRepository;
import com.kerfaiyassine.player.repositories.PlayerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerManagementService {

    private final PlayerRepository playerRepository;

    private final ContractRepository contractRepository;

    public PlayerManagementService(
            PlayerRepository playerRepository,
            ContractRepository contractRepository
    ) {
        this.playerRepository = playerRepository;
        this.contractRepository = contractRepository;
    }

    public List<Player> getTeamPlayers(String teamId) {

        List<Contract> contracts =
                contractRepository.findByTeamId(teamId);

        return contracts.stream()
                .map(contract ->
                        playerRepository.findById(
                                contract.getPlayerId()
                        ).orElse(null)
                )
                .toList();
    }

    public Player releasePlayer(String playerId) {

        Player player = playerRepository.findById(playerId)
                .orElseThrow(
                        () -> new RuntimeException("Player not found")
                );

        player.setStatus(PlayerStatus.FREE_AGENT);

        return playerRepository.save(player);
    }

    public Player moveToYouth(String playerId) {

        Player player = playerRepository.findById(playerId)
                .orElseThrow(
                        () -> new RuntimeException("Player not found")
                );

        player.setLineup(PlayerSituation.YOUTH);

        return playerRepository.save(player);
    }

    public Contract renewContract(String contractId) {

        Contract contract =
                contractRepository.findById(contractId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Contract not found"
                                )
                        );

        contract.setRenewable(true);

        return contractRepository.save(contract);
    }

    public List<Player> searchPlayers(
            String position,
            Integer rating
    ) {

        if (position != null && rating != null) {

            return playerRepository
                    .findByPositionAndAbilityGreaterThanEqual(
                            PlayerPosition.valueOf(position),
                            rating
                    );
        }

        if (position != null) {

            return playerRepository.findByPosition(
                    PlayerPosition.valueOf(position)
            );
        }

        if (rating != null) {

            return playerRepository
                    .findByAbilityGreaterThanEqual(rating);
        }

        return playerRepository.findAll();
    }

    public List<Contract> getPlayerContracts(
            String playerId
    ) {

        return contractRepository.findByPlayerId(playerId);
    }

    public Contract acceptTransfer(String contractId) {

        Contract contract =
                contractRepository.findById(contractId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Contract not found"
                                )
                        );

        contract.setContractStatus(
                ContractStatus.REMAINING
        );

        return contractRepository.save(contract);
    }

    public Contract refuseTransfer(String contractId) {

        Contract contract =
                contractRepository.findById(contractId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Contract not found"
                                )
                        );

        contract.setContractStatus(
                ContractStatus.REFUSED
        );

        return contractRepository.save(contract);
    }

    public String getCurrentTeam(String playerId) {

        List<Contract> contracts =
                contractRepository.findByPlayerId(playerId);

        Contract current =
                contracts.stream()
                        .filter(contract ->
                                contract.getContractStatus()
                                        == ContractStatus.REMAINING
                        )
                        .findFirst()
                        .orElse(null);

        if (current == null) {
            return "FREE AGENT";
        }

        return current.getTeamId();
    }
}