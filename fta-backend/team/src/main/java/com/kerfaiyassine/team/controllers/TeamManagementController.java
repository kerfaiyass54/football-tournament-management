package com.kerfaiyassine.team.controllers;

import com.kerfaiyassine.team.kafka.StadiumOperationMessage;
import com.kerfaiyassine.team.services.TeamManagementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/team-management")
public class TeamManagementController {

    private final TeamManagementService teamManagementService;

    public TeamManagementController(
            TeamManagementService teamManagementService
    ) {
        this.teamManagementService = teamManagementService;
    }

    @GetMapping("/{teamId}/players")
    public ResponseEntity<Object> getPlayers(
            @PathVariable String teamId
    ) {

        return ResponseEntity.ok(
                teamManagementService.getPlayers(teamId)
        );
    }

    @PostMapping("/players/{playerId}/release")
    public ResponseEntity<Object> releasePlayer(
            @PathVariable String playerId
    ) {

        return ResponseEntity.ok(
                teamManagementService.releasePlayer(playerId)
        );
    }

    @PostMapping("/players/{playerId}/youth")
    public ResponseEntity<Object> moveToYouth(
            @PathVariable String playerId
    ) {

        return ResponseEntity.ok(
                teamManagementService.movePlayerToYouth(playerId)
        );
    }

    @PostMapping("/contracts/{contractId}/renew")
    public ResponseEntity<Object> renewContract(
            @PathVariable long contractId
    ) {

        return ResponseEntity.ok(
                teamManagementService.renewPlayerContract(
                        contractId
                )
        );
    }

    @PostMapping("/careers/{careerId}/renew")
    public ResponseEntity<Object> renewCareer(
            @PathVariable String careerId
    ) {

        return ResponseEntity.ok(
                teamManagementService.renewManagerCareer(
                        careerId
                )
        );
    }

    @PostMapping("/careers/{careerId}/sack")
    public ResponseEntity<Object> sackManager(
            @PathVariable String careerId
    ) {

        return ResponseEntity.ok(
                teamManagementService.sackManager(careerId)
        );
    }

    @PostMapping("/stadium/operation")
    public ResponseEntity<String> requestOperation(
            @RequestBody StadiumOperationMessage message
    ) {

        return new ResponseEntity<>(
                teamManagementService.requestStadiumOperation(
                        message
                ),
                HttpStatus.CREATED
        );
    }

    @GetMapping("/{teamId}")
    public ResponseEntity<Object> getTeam(
            @PathVariable String teamId
    ) {

        return ResponseEntity.ok(
                teamManagementService.getTeam(teamId)
        );
    }
}