package com.kerfaiyassine.stadium.dtos;

import com.kerfaiyassine.stadium.enums.StadiumTypes;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StadiumDTOCreation {

    private String name;
    private int capacity;
    private int yearOfEstablishment;
    private StadiumTypes type;

}
