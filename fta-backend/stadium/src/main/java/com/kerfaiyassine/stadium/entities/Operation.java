package com.kerfaiyassine.stadium.entities;


import com.kerfaiyassine.stadium.enums.OperationType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "operations")
public class Operation {

    @Id
    private String id;

    @NotNull
    @NotBlank
    @Size(min = 20)
    private String name;


    private String description;

    @Enumerated(EnumType.STRING)
    private OperationType type;

    private Instant startTime;

    private Instant endTime;

    @DBRef
    @Indexed(unique = true)
    private Stadium stadium;
}
