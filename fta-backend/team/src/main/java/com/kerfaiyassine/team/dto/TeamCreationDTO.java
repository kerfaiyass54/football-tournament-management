package com.kerfaiyassine.team.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TeamCreationDTO {

    private String name;
    private int establishYear;
    private String city;
}
