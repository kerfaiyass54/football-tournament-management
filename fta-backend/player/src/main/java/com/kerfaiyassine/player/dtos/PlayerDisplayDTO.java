package com.kerfaiyassine.player.dtos;


import com.kerfaiyassine.player.enums.PlayerPosition;
import com.kerfaiyassine.player.enums.PlayerStatus;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class PlayerDisplayDTO {

    private String name;
    private int age;
    private String nationality;
    private PlayerPosition position;
    private double ability;
    private double height;
    private double weight;
    private PlayerStatus status;
    private int yearOfBirth;
}
