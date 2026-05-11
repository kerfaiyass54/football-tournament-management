package com.kerfaiyassine.builder.DTOs;

import com.kerfaiyassine.stadium.enums.StadiumTypes;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;

public class StadiumRequestDTO {

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotNull
    @PositiveOrZero
    @Min(500)
    private Integer capacity;

    @NotNull
    @Min(1920)
    private Integer yearOfEstablishment;

    @NotBlank
    @Size(max = 100)
    private String country;

    @NotNull
    private StadiumTypes type;

    private Integer builderId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getYearOfEstablishment() {
        return yearOfEstablishment;
    }

    public void setYearOfEstablishment(Integer yearOfEstablishment) {
        this.yearOfEstablishment = yearOfEstablishment;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public StadiumTypes getType() {
        return type;
    }

    public void setType(StadiumTypes type) {
        this.type = type;
    }

    public Integer getBuilderId() {
        return builderId;
    }

    public void setBuilderId(Integer builderId) {
        this.builderId = builderId;
    }
}