package com.kerfaiyassine.organizer.dtos;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Builder;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class OrganizerDTO {

    private Integer id;

    @NotBlank
    @Size(max = 100)
    private String name;
}
