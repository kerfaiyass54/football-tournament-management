package com.kerfaiyassine.stadium.entities;

import com.kerfaiyassine.stadium.enums.StadiumTypes;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "stadiums")
public class Stadium {

    @Id
    private String id;

    @NotNull
    @NotBlank
    @Size(max = 100)
    private String name;

    @NotNull
    @PositiveOrZero
    @Min(500)
    private int capacity;

    @NotNull
    @PositiveOrZero
    @Min(1920)
    private int yearOfEstablishment;

    @NotNull
    @Enumerated(EnumType.STRING)
    private StadiumTypes type;



}
