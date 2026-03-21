package com.kerfaiyassine.manager.dtos;


import com.kerfaiyassine.manager.enums.ManagerStatus;
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
public class ManagerDTO {
    private String id;
    private String name;
    private int yearOfBirth;
    private ManagerStatus status;
    private String nationality;
}
