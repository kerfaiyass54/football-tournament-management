package com.kerfaiyassine.builder.entities;


import com.kerfaiyassine.builder.enums.Expertise;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.EnumType;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="builders")
public class Builder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @NotBlank
    @Size(max = 100)
    @Column(name="name", nullable = false, unique = true)
    private String name;

    @NotBlank
    @Size(max = 50)
    @Column(name="nationality", nullable = false)
    private String nationality;

    @Column(name="expertise", nullable = false)
    @Enumerated(EnumType.STRING)
    private Expertise expertise;

    @Min(1950)
    @PositiveOrZero
    @Column(name="year_established")
    private Integer yearEstablished;

    @NotNull
    @PositiveOrZero
    @Column(name="price",nullable = false)
    private BigDecimal price;




}
