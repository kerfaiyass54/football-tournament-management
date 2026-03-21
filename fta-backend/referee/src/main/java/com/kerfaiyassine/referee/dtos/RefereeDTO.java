package com.kerfaiyassine.referee.dtos;



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
public class RefereeDTO {

    private Integer Id;
    private String name;
    private String nationality;
    private long organizerId;
}
