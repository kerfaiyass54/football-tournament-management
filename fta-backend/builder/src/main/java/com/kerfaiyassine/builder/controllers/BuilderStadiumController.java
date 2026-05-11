package com.kerfaiyassine.builder.controllers;


import com.kerfaiyassine.builder.DTOs.OperationRequestDTO;
import com.kerfaiyassine.builder.DTOs.StadiumRequestDTO;
import com.kerfaiyassine.builder.DTOs.StadiumStatsDTO;
import com.kerfaiyassine.builder.services.BuilderStadiumService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/builders/stadiums")
public class BuilderStadiumController {

    private final BuilderStadiumService builderStadiumService;

    public BuilderStadiumController(
            BuilderStadiumService builderStadiumService
    ) {
        this.builderStadiumService = builderStadiumService;
    }

    @PostMapping
    public ResponseEntity<Object> addStadium(
            @Valid @RequestBody StadiumRequestDTO dto
    ) {

        return new ResponseEntity<>(
                builderStadiumService.addStadium(dto),
                HttpStatus.CREATED
        );
    }

    @GetMapping("/builder/{builderId}")
    public ResponseEntity<Object> getBuilderStadiums(
            @PathVariable Integer builderId
    ) {

        return ResponseEntity.ok(
                builderStadiumService.getBuilderStadiums(builderId)
        );
    }

    @GetMapping("/stats")
    public ResponseEntity<StadiumStatsDTO> getStats() {

        return ResponseEntity.ok(
                builderStadiumService.getStats()
        );
    }

    @GetMapping("/{stadiumId}/operations")
    public ResponseEntity<Object> getOperations(
            @PathVariable String stadiumId
    ) {

        return ResponseEntity.ok(
                builderStadiumService.getOperations(stadiumId)
        );
    }

    @PostMapping("/{stadiumId}/operations")
    public ResponseEntity<Object> applyOperation(
            @PathVariable String stadiumId,
            @RequestBody OperationRequestDTO dto
    ) {

        return new ResponseEntity<>(
                builderStadiumService.applyOperation(
                        stadiumId,
                        dto
                ),
                HttpStatus.CREATED
        );
    }
}