package com.kerfaiyassine.team.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(
        name = "manager-service",
        url = "http://localhost:8083"
)
public interface ManagerClient {

    @PostMapping("/api/managers/careers/{careerId}/renew")
    Object renewCareer(
            @PathVariable String careerId
    );

    @PostMapping("/api/managers/careers/{careerId}/sack")
    Object sackManager(
            @PathVariable String careerId
    );
}