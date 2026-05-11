package com.kerfaiyassine.manager.services;

import com.kerfaiyassine.manager.clients.TeamClient;
import com.kerfaiyassine.manager.entities.Career;
import com.kerfaiyassine.manager.entities.Manager;
import com.kerfaiyassine.manager.enums.CareerStatus;
import com.kerfaiyassine.manager.enums.ManagerStatus;
import com.kerfaiyassine.manager.repositories.CareerRepository;
import com.kerfaiyassine.manager.repositories.ManagerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerManagementService {

    private final ManagerRepository managerRepository;

    private final CareerRepository careerRepository;

    private final TeamClient teamClient;

    public ManagerManagementService(
            ManagerRepository managerRepository,
            CareerRepository careerRepository,
            TeamClient teamClient
    ) {
        this.managerRepository = managerRepository;
        this.careerRepository = careerRepository;
        this.teamClient = teamClient;
    }

    public Object getManagerTeam(String managerId) {

        List<Career> careers =
                careerRepository.findByManagerId(managerId);

        Career current =
                careers.stream()
                        .filter(career ->
                                career.getStatus()
                                        == CareerStatus.PENDING
                        )
                        .findFirst()
                        .orElse(null);

        if (current == null) {
            return "NO TEAM";
        }

        return teamClient.getTeam(current.getTeamId());
    }

    public Career acceptCareer(String careerId) {

        Career career =
                careerRepository.findById(careerId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Career not found"
                                )
                        );

        career.setStatus(CareerStatus.PENDING);

        Manager manager =
                managerRepository.findById(
                        career.getManagerId()
                ).orElseThrow(
                        () -> new RuntimeException(
                                "Manager not found"
                        )
                );

        manager.setStatus(ManagerStatus.TAKEN);

        managerRepository.save(manager);

        return careerRepository.save(career);
    }

    public Career refuseCareer(String careerId) {

        Career career =
                careerRepository.findById(careerId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Career not found"
                                )
                        );

        career.setStatus(CareerStatus.REFUSED);

        return careerRepository.save(career);
    }

    public Career renewCareer(String careerId) {

        Career career =
                careerRepository.findById(careerId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Career not found"
                                )
                        );

        career.setRenewable(true);

        return careerRepository.save(career);
    }

    public Career sackManager(String careerId) {

        Career career =
                careerRepository.findById(careerId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Career not found"
                                )
                        );

        Manager manager =
                managerRepository.findById(
                        career.getManagerId()
                ).orElseThrow(
                        () -> new RuntimeException(
                                "Manager not found"
                        )
                );

        manager.setStatus(ManagerStatus.FREE);

        managerRepository.save(manager);

        return career;
    }
}