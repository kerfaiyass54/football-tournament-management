package com.kerfaiyassine.supporter.entities;


import com.kerfaiyassine.supporter.enums.Continent;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
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
@Document(collection = "locations")
public class Location {

    @Id
    private String id;

    @NotBlank
    @Size(min = 1, max = 25)
    private String name;

    @NotBlank
    @Size(min = 1, max = 25)
    private String country;

    @NotBlank
    @Size(min = 1, max = 25)
    @Enumerated(EnumType.STRING)
    private Continent continent;

    private List<Long> supporters;
}
