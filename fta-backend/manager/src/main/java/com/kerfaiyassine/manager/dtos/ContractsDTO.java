package com.kerfaiyassine.manager.dtos;


import com.kerfaiyassine.manager.enums.CareerStatus;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ContractsDTO {
    private int duration;
    private int yearStart;
    private CareerStatus status;
    private boolean renewable;
    private String managerId;
    private String teamId;
}
