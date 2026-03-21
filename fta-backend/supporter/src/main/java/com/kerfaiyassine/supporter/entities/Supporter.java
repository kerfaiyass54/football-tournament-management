package com.kerfaiyassine.supporter.entities;




import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Document(collection = "supporters")
public class Supporter {

    @Id
    private String id;

    @NotBlank
    @Size(min = 1, max = 25)
    private String name;

    @NotBlank
    @Size(min = 1, max = 25)
    private String nationality;

    private String locationId;

}
