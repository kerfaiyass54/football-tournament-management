package com.kerfaiyassine.builder.clients;


import com.kerfaiyassine.builder.DTOs.OperationRequestDTO;
import com.kerfaiyassine.builder.DTOs.StadiumRequestDTO;
import com.kerfaiyassine.builder.DTOs.StadiumStatsDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(
        name = "stadium-service",
        url = "http://localhost:8059"
)
public interface StadiumClient {

    @PostMapping("/api/stadiums")
    Object addStadium(@RequestBody StadiumRequestDTO dto);

    @GetMapping("/api/stadiums/builder/{builderId}")
    Object getBuilderStadiums(@PathVariable Integer builderId);

    @GetMapping("/api/stadiums/stats")
    StadiumStatsDTO getStats();

    @GetMapping("/api/stadiums/{stadiumId}/operations")
    Object getOperations(@PathVariable String stadiumId);

    @PostMapping("/api/stadiums/{stadiumId}/operations")
    Object addOperation(
            @PathVariable String stadiumId,
            @RequestBody OperationRequestDTO dto
    );
}