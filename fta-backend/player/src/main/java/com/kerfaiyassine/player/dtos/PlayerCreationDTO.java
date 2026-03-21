package com.kerfaiyassine.player.dtos;


import com.kerfaiyassine.player.enums.PlayerPosition;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class PlayerCreationDTO {
    private String name;
    private int yearOfBirth;
    private String nationality;
    private PlayerPosition position;
    private double ability;
    private double height;
    private double weight;
}
