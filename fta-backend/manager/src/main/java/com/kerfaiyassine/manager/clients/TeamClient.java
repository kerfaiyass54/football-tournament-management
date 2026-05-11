package com.kerfaiyassine.manager.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(
        name = "team-service",
        url = "http://localhost:8084"
)
public interface TeamClient {

    @GetMapping("/api/teams/{teamId}")
    Object getTeam(
            @PathVariable String teamId
    );
}