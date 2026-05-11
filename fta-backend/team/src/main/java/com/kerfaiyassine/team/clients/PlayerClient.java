package com.kerfaiyassine.team.clients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(
        name = "player-service",
        url = "http://localhost:8082"
)
public interface PlayerClient {

    @GetMapping("/api/players/team/{teamId}")
    Object getTeamPlayers(
            @PathVariable String teamId
    );

    @PostMapping("/api/players/{playerId}/release")
    Object releasePlayer(
            @PathVariable String playerId
    );

    @PostMapping("/api/players/{playerId}/youth")
    Object moveToYouth(
            @PathVariable String playerId
    );

    @PostMapping("/api/players/contracts/{contractId}/renew")
    Object renewContract(
            @PathVariable long contractId
    );
}