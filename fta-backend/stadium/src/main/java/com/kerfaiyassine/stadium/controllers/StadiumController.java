package com.kerfaiyassine.stadium.controllers;

import com.kerfaiyassine.stadium.dtos.OperationRequestDTO;
import com.kerfaiyassine.stadium.entities.Operation;
import com.kerfaiyassine.stadium.entities.Stadium;
import com.kerfaiyassine.stadium.services.StadiumService;
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
@RequestMapping("/api/stadiums")
public class StadiumController {

    private final StadiumService stadiumService;

    public StadiumController(
            StadiumService stadiumService
    ) {
        this.stadiumService = stadiumService;
    }

    @PostMapping
    public ResponseEntity<Stadium> addStadium(
            @Valid @RequestBody Stadium stadium
    ) {

        return new ResponseEntity<>(
                stadiumService.addStadium(stadium),
                HttpStatus.CREATED
        );
    }

    @GetMapping("/builder/{builderId}")
    public ResponseEntity<Object> getBuilderStadiums(
            @PathVariable Long builderId
    ) {

        return ResponseEntity.ok(
                stadiumService.getBuilderStadiums(builderId)
        );
    }

    @GetMapping("/stats")
    public ResponseEntity<Object> getStats() {

        return ResponseEntity.ok(
                stadiumService.getStats()
        );
    }

    @GetMapping("/{stadiumId}/operations")
    public ResponseEntity<Object> getOperations(
            @PathVariable String stadiumId
    ) {

        return ResponseEntity.ok(
                stadiumService.getOperations(stadiumId)
        );
    }

    @PostMapping("/{stadiumId}/operations")
    public ResponseEntity<Operation> addOperation(
            @PathVariable String stadiumId,
            @RequestBody OperationRequestDTO dto
    ) {

        return new ResponseEntity<>(
                stadiumService.addOperation(
                        stadiumId,
                        dto
                ),
                HttpStatus.CREATED
        );
    }
}