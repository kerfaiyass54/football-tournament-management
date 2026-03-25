package com.kerfaiyassine.stadium.controllers;

import com.kerfaiyassine.stadium.dtos.StadiumDTO;
import com.kerfaiyassine.stadium.dtos.StadiumDTOCreation;
import com.kerfaiyassine.stadium.enums.StadiumTypes;
import com.kerfaiyassine.stadium.services.StadiumService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.validation.Valid;

import java.util.List;


@RestController
@RequestMapping("/stadium")
@CrossOrigin("*")
public class StadiumController {

    private final StadiumService stadiumService;
    public StadiumController(StadiumService stadiumService) {
        this.stadiumService = stadiumService;
    }

    @PostMapping("/")
    public ResponseEntity<StadiumDTO>  createStadium(@Valid @RequestBody StadiumDTOCreation stadiumDTO){
        StadiumDTO stadium = stadiumService.addStadium(stadiumDTO);
        return new ResponseEntity<>(stadium, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StadiumDTO>  getStadiumById(@PathVariable String id){
        StadiumDTO stadiumDTO = stadiumService.getStadium(id);
        return new ResponseEntity<>(stadiumDTO, HttpStatus.OK);
    }

    @GetMapping("/country/{country}")
    public ResponseEntity<List<StadiumDTO>> getStadiumsByCountry(@PathVariable String country){
        List<StadiumDTO> stadiumDTOList = stadiumService.getStadiumsByCountry(country);
        return new ResponseEntity<>(stadiumDTOList, HttpStatus.OK);
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<StadiumDTO>> getStadiumsByType(@PathVariable StadiumTypes type){
        List<StadiumDTO>  stadiumDTOList = stadiumService.getStadiumsByType(type);
        return new ResponseEntity<>(stadiumDTOList, HttpStatus.OK);
    }



}
