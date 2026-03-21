package com.kerfaiyassine.supporter.DTOs;


import com.kerfaiyassine.supporter.enums.Continent;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class LocationDTO {

    private String id;
    private String name;
    private String country;
    private Continent continent;
}
