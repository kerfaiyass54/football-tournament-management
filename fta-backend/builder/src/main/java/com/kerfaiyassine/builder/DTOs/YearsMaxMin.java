package com.kerfaiyassine.builder.DTOs;


import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class YearsMaxMin {

    @NotNull
    private Integer minYear;

    @NotNull
    private Integer maxYear;
}
