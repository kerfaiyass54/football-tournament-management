package com.kerfaiyassine.manager.entities;


import com.kerfaiyassine.manager.enums.CareerStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "careers")
public class Career {

    @Id
    private String id;

    @Positive
    private int durationInYears;

    @NotNull
    @Min(1950)
    private Integer yearStart;

    @NotNull
    private CareerStatus status;


    private Boolean renewable;

    @NotNull
    private String managerId;

    @NotNull
    private String teamId;


}
