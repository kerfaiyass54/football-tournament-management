package com.kerfaiyassine.builder.DTOs;


import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BuilderDTO {

    private Integer id;

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Size(max = 50)
    private String nationality;


    @NotNull
    @Min(1800)
    private Integer yearEstablished;

    @NotNull
    @Positive
    private BigDecimal price;


}
