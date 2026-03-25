package com.kerfaiyassine.stadium.dtos;


import com.kerfaiyassine.stadium.enums.OperationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OperationDTO {

    private String id;
    private String name;
    private String description;
    private OperationType operationType;
    private int duration;
    private String stadiumName;
}
