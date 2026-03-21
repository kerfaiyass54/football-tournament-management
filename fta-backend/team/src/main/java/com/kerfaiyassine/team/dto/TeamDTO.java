package com.kerfaiyassine.team.dto;


import com.kerfaiyassine.team.enums.TeamStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TeamDTO {

    private String name;
    private int establishYear;
    private int rank;
    private String city;
    private TeamStatus status;
    private int budget;
}
