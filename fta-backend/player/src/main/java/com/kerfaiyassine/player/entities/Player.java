package com.kerfaiyassine.player.entities;


import com.kerfaiyassine.player.enums.PlayerPosition;
import com.kerfaiyassine.player.enums.PlayerSituation;
import com.kerfaiyassine.player.enums.PlayerStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Document(collection = "players")
public class Player {

    @Id
    private String id;

    @NotNull
    @NotBlank
    @Size(max = 100)
    private String name;

    @NotNull
    @NotBlank
    @Size(max = 50)
    private String nationality;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PlayerPosition position;

    @NotNull
    @Min(50)
    private Integer ability;

    @NotNull
    @Min(1980)
    private Integer yearOfBirth;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PlayerStatus status;

    @NotNull
    @Min(0)
    private double marketValue;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PlayerSituation lineup;

    @NotNull
    @Min(1)
    private int number;


    private List<String> contracts;

    @NotNull
    @Min(165)
    private double height;

    @NotNull
    @Min(65)
    private double weight;

}
