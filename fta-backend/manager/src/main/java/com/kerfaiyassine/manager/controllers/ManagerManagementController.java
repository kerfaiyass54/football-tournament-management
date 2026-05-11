package com.kerfaiyassine.manager.controllers;

import com.kerfaiyassine.manager.services.ManagerManagementService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/managers")
public class ManagerManagementController {

    private final ManagerManagementService
            managerManagementService;

    public ManagerManagementController(
            ManagerManagementService managerManagementService
    ) {
        this.managerManagementService =
                managerManagementService;
    }

    @GetMapping("/{managerId}/team")
    public ResponseEntity<Object> getManagerTeam(
            @PathVariable String managerId
    ) {

        return ResponseEntity.ok(
                managerManagementService.getManagerTeam(
                        managerId
                )
        );
    }

    @PostMapping("/careers/{careerId}/accept")
    public ResponseEntity<Object> acceptCareer(
            @PathVariable String careerId
    ) {

        return ResponseEntity.ok(
                managerManagementService.acceptCareer(
                        careerId
                )
        );
    }

    @PostMapping("/careers/{careerId}/refuse")
    public ResponseEntity<Object> refuseCareer(
            @PathVariable String careerId
    ) {

        return ResponseEntity.ok(
                managerManagementService.refuseCareer(
                        careerId
                )
        );
    }

    @PostMapping("/careers/{careerId}/renew")
    public ResponseEntity<Object> renewCareer(
            @PathVariable String careerId
    ) {

        return ResponseEntity.ok(
                managerManagementService.renewCareer(
                        careerId
                )
        );
    }

    @PostMapping("/careers/{careerId}/sack")
    public ResponseEntity<Object> sackManager(
            @PathVariable String careerId
    ) {

        return ResponseEntity.ok(
                managerManagementService.sackManager(
                        careerId
                )
        );
    }
}