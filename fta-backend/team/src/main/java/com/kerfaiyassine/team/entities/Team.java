package com.kerfaiyassine.team.entities;

import com.kerfaiyassine.team.enums.TeamStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "teams")
public class Team {

    @Id
    private String id;

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Min(1890)
    private int establishYear;


    @NotBlank
    @Min(1)
    private int rank;

    @NotBlank
    @NotNull
    private String city;

    @NotBlank
    @NotNull
    @Enumerated(EnumType.STRING)
    private TeamStatus status;

    @NotBlank
    @Min(25)
    private int budget;
}
