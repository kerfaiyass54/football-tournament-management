package com.kerfaiyassine.builder.controllers;


import com.kerfaiyassine.builder.DTOs.BuilderDTO;
import com.kerfaiyassine.builder.DTOs.ExpertiseStats;
import com.kerfaiyassine.builder.DTOs.YearsMaxMin;
import com.kerfaiyassine.builder.enums.Expertise;
import com.kerfaiyassine.builder.services.BuilderService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
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
import org.springframework.web.bind.annotation.DeleteMapping;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/builder")
@CrossOrigin("*")
public class BuilderController {

    private final BuilderService builderService;

    public BuilderController(BuilderService builderService) {
        this.builderService = builderService;
    }

    @PostMapping("/")
    @Operation(summary = "Create a new builder")
    public ResponseEntity<BuilderDTO> createBuilder(@Valid @RequestBody BuilderDTO builderDTO){
        BuilderDTO builder = builderService.createBuilder(builderDTO);
        return new ResponseEntity<>(builder, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get a builder by id")
    public ResponseEntity<BuilderDTO> getBuilder(@Valid @PathVariable Integer id){
        BuilderDTO builderDTO = builderService.getBuilderById(id);
        return new ResponseEntity<>(builderDTO, HttpStatus.OK);
    }

    @GetMapping("/nationalities")
    @Operation(summary = "Get builders list according to nationality")
    public ResponseEntity<List<BuilderDTO>> getBuildersByNationality(@Valid @RequestParam String nationality, @RequestParam(defaultValue = "0") int page,
                                                                     @RequestParam(defaultValue = "5") int size){
        List<BuilderDTO> builders = builderService.getBuilderByNationality(nationality, page, size);
        return new ResponseEntity<>(builders, HttpStatus.OK);
    }

    @GetMapping("/expertises")
    @Operation(summary = "Get builders list according to expertise")
    public ResponseEntity<List<BuilderDTO>> getBuildersByExpertise(@Valid @RequestParam Expertise expertise, @RequestParam(defaultValue = "0") int page,
                                                                   @RequestParam(defaultValue = "5") int size){
        List<BuilderDTO> builders = builderService.getBuilderByExpertise(expertise, page, size);
        return new ResponseEntity<>(builders, HttpStatus.OK);
    }

    @PatchMapping("/")
    @Operation(summary = "Update a builder")
    public ResponseEntity<Void> updateBuilder(@Valid @RequestParam Integer id,@Valid  @RequestParam BigDecimal price){
        builderService.updateBuilderPrice(id, price);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/")
    @Operation(summary = "Get builders list")
    public ResponseEntity<Page<BuilderDTO>> getAllBuilders(@RequestParam(defaultValue = "0") int page,
                                                           @RequestParam(defaultValue = "5") int size){
        Page<BuilderDTO> builders = builderService.getAllBuilders(page, size);
        return new ResponseEntity<>(builders, HttpStatus.OK);
    }


    @GetMapping("/stats")
    @Operation(summary = "Get builders stats for an expertise")
    public ResponseEntity<ExpertiseStats> countBuilders(@Valid @RequestParam String expertise) {
        try {
            Expertise exp = Expertise.valueOf(expertise.toUpperCase());
            ExpertiseStats stats = builderService.countBuilders(exp);
            return new ResponseEntity<>(stats, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/aged")
    @Operation(summary = "Get builders oldest and youngest")
    public ResponseEntity<YearsMaxMin> getYoungestAndOldest(){
        YearsMaxMin YearsMaxMin = builderService.getYoungestAndOldest();
        return new ResponseEntity<>(YearsMaxMin, HttpStatus.OK);
    }

    @GetMapping("/nations")
    @Operation(summary = "Get builders nationalities")
    public ResponseEntity<String> getNations(){
        String nationality = builderService.getMostNationality();
        return new ResponseEntity<>(nationality, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a builder")
    public ResponseEntity<Void> deleteBuilder(@Valid @PathVariable Integer id){
        builderService.deleteBuilder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }





}
