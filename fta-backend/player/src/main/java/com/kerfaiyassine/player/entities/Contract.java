package com.kerfaiyassine.player.entities;


import com.kerfaiyassine.player.enums.ContractStatus;
import com.kerfaiyassine.player.enums.ContractType;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Document(collection = "contracts")
public class Contract {

    @Id
    private long id;

    @NotNull
    @Min(6)
    private int durationByMonth;

    @NotNull
    @Min(2010)
    private Integer yearStart;

    @NotNull
    private Boolean renewable;

    @NotNull
    private ContractType contractType;

    @NotNull
    private ContractStatus contractStatus;


    private String teamId;

    private String playerId;

    @NotNull
    @Min(5)
    private double price;

    @NotNull
    @Min(800000)
    private double salary;
}
