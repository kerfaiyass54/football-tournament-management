package com.kerfaiyassine.player.dtos;


import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class ContractDTO {
    private int duration;
    private int yearStart;
    private boolean renewable;
    private String name;
    private String team;
    private int price;
    private int salary;

}
