package com.kerfaiyassine.player.controllers;

import com.kerfaiyassine.player.services.PlayerManagementService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/players")
public class PlayerManagementController {

    private final PlayerManagementService playerManagementService;

    public PlayerManagementController(
            PlayerManagementService playerManagementService
    ) {
        this.playerManagementService =
                playerManagementService;
    }

    @GetMapping("/team/{teamId}")
    public ResponseEntity<Object> getTeamPlayers(
            @PathVariable String teamId
    ) {

        return ResponseEntity.ok(
                playerManagementService.getTeamPlayers(teamId)
        );
    }

    @PostMapping("/{playerId}/release")
    public ResponseEntity<Object> releasePlayer(
            @PathVariable String playerId
    ) {

        return ResponseEntity.ok(
                playerManagementService.releasePlayer(playerId)
        );
    }

    @PostMapping("/{playerId}/youth")
    public ResponseEntity<Object> moveToYouth(
            @PathVariable String playerId
    ) {

        return ResponseEntity.ok(
                playerManagementService.moveToYouth(playerId)
        );
    }

    @PostMapping("/contracts/{contractId}/renew")
    public ResponseEntity<Object> renewContract(
            @PathVariable String contractId
    ) {

        return ResponseEntity.ok(
                playerManagementService.renewContract(
                        contractId
                )
        );
    }

    @GetMapping("/search")
    public ResponseEntity<Object> searchPlayers(
            @RequestParam(required = false)
            String position,

            @RequestParam(required = false)
            Integer rating
    ) {

        return ResponseEntity.ok(
                playerManagementService.searchPlayers(
                        position,
                        rating
                )
        );
    }

    @GetMapping("/{playerId}/contracts")
    public ResponseEntity<Object> getContracts(
            @PathVariable String playerId
    ) {

        return ResponseEntity.ok(
                playerManagementService.getPlayerContracts(
                        playerId
                )
        );
    }

    @PostMapping("/contracts/{contractId}/accept")
    public ResponseEntity<Object> acceptTransfer(
            @PathVariable String contractId
    ) {

        return ResponseEntity.ok(
                playerManagementService.acceptTransfer(
                        contractId
                )
        );
    }

    @PostMapping("/contracts/{contractId}/refuse")
    public ResponseEntity<Object> refuseTransfer(
            @PathVariable String contractId
    ) {

        return ResponseEntity.ok(
                playerManagementService.refuseTransfer(
                        contractId
                )
        );
    }

    @GetMapping("/{playerId}/team")
    public ResponseEntity<Object> getCurrentTeam(
            @PathVariable String playerId
    ) {

        return ResponseEntity.ok(
                playerManagementService.getCurrentTeam(
                        playerId
                )
        );
    }
}