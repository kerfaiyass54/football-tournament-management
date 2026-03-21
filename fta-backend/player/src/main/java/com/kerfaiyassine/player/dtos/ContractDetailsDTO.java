package com.kerfaiyassine.player.dtos;

import com.kerfaiyassine.player.enums.ContractStatus;
import com.kerfaiyassine.player.enums.ContractType;
import lombok.*;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ContractDetailsDTO {
    private int duration;
    private int yearStart;
    private boolean renewable;
    private ContractType contractType;
    private ContractStatus contractStatus;
    private String playerName;
    private String teamName;
    private int price;
    private int salary;
}
