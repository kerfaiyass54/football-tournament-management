package com.kerfaiyassine.builder.services;

import com.kerfaiyassine.builder.DTOs.OperationRequestDTO;
import com.kerfaiyassine.builder.DTOs.StadiumRequestDTO;
import com.kerfaiyassine.builder.DTOs.StadiumStatsDTO;
import com.kerfaiyassine.builder.clients.StadiumClient;

import org.springframework.stereotype.Service;

@Service
public class BuilderStadiumService {

    private final StadiumClient stadiumClient;

    public BuilderStadiumService(StadiumClient stadiumClient) {
        this.stadiumClient = stadiumClient;
    }

    public Object addStadium(StadiumRequestDTO dto) {
        return stadiumClient.addStadium(dto);
    }

    public Object getBuilderStadiums(Integer builderId) {
        return stadiumClient.getBuilderStadiums(builderId);
    }

    public StadiumStatsDTO getStats() {
        return stadiumClient.getStats();
    }

    public Object getOperations(String stadiumId) {
        return stadiumClient.getOperations(stadiumId);
    }

    public Object applyOperation(
            String stadiumId,
            OperationRequestDTO dto
    ) {
        return stadiumClient.addOperation(stadiumId, dto);
    }
}