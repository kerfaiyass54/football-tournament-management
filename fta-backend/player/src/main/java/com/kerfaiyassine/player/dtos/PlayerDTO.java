package com.kerfaiyassine.player.dtos;


import com.kerfaiyassine.player.enums.PlayerPosition;
import com.kerfaiyassine.player.enums.PlayerSituation;
import com.kerfaiyassine.player.enums.PlayerStatus;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class PlayerDTO {
    private String id;
    private String name;
    private int age;
    private String nationality;
    private PlayerPosition position;
    private Integer ability;
    private PlayerSituation situation;
    private double marketValue;
    private double height;
    private double weight;
    private PlayerStatus status;
    private int yearOfBirth;
}
