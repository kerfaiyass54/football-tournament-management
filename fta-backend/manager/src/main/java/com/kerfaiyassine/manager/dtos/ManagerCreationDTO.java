package com.kerfaiyassine.manager.dtos;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ManagerCreationDTO {

    private String name;
    private int yearOfBirth;
    private String nationality;
}
