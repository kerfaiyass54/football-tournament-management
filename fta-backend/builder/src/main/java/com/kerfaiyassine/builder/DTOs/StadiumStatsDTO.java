package com.kerfaiyassine.builder.DTOs;

import java.util.Map;

public class StadiumStatsDTO {

    private Long totalStadiums;

    private Map<String, Long> stadiumsByType;

    public Long getTotalStadiums() {
        return totalStadiums;
    }

    public void setTotalStadiums(Long totalStadiums) {
        this.totalStadiums = totalStadiums;
    }

    public Map<String, Long> getStadiumsByType() {
        return stadiumsByType;
    }

    public void setStadiumsByType(Map<String, Long> stadiumsByType) {
        this.stadiumsByType = stadiumsByType;
    }
}