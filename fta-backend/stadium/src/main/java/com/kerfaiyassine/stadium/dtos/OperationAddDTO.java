package com.kerfaiyassine.stadium.dtos;


import com.kerfaiyassine.stadium.enums.OperationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OperationAddDTO {

    private String name;
    private String description;
    private OperationType operationType;
    private Instant startTime;
    private Instant endTime;


}
