package com.kerfaiyassine.supporter.controllers;


import com.kerfaiyassine.supporter.DTOs.LocationSupporter;
import com.kerfaiyassine.supporter.DTOs.SupporterDTO;
import com.kerfaiyassine.supporter.entities.Supporter;
import com.kerfaiyassine.supporter.services.SupporterService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supporter")
@CrossOrigin("*")
public class SupporterController {

    private final SupporterService  supporterService;

    public SupporterController(SupporterService supporterService) {
        this.supporterService = supporterService;
    }


    @PostMapping("/")
    public ResponseEntity<SupporterDTO> addSupporter(@RequestBody SupporterDTO supporter) {
        SupporterDTO supporterDTO = supporterService.save(supporter);
        return new ResponseEntity<>(supporterDTO, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<SupporterDTO>  getSupporter(@RequestParam String id) {
        SupporterDTO supporterDTO = supporterService.getSupporterByID(id);
        return ResponseEntity.ok(supporterDTO);
    }

    @GetMapping("/")
    public ResponseEntity<Page<SupporterDTO>> getSupporterByLocation(@RequestParam String location, @RequestParam int page, @RequestParam int size) {
        Page<SupporterDTO> supporterDTOS = supporterService.getSupportersByLocation(location, page, size);
        return ResponseEntity.ok(supporterDTOS);
    }

    @GetMapping("/list")
    public ResponseEntity<List<SupporterDTO>> getAllSupporters() {
        List<SupporterDTO> supporterDTOS = supporterService.getAllSupporters();
        return ResponseEntity.ok(supporterDTOS);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSupporter(@PathVariable String id) {
        supporterService.deleteSupporterByID(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<SupporterDTO> getSupporterByName(@PathVariable String name) {
        SupporterDTO supporter = supporterService.getByName(name);
        return ResponseEntity.ok(supporter);
    }

    @GetMapping("/")
    public ResponseEntity<Page<SupporterDTO>> getAllSupportersByNationality(@RequestParam String nationality, @RequestParam int page, @RequestParam int size) {
        Page<SupporterDTO> supporterDTOS = supporterService.getByNationality(nationality,page,size);
        return ResponseEntity.ok(supporterDTOS);
    }

    @PutMapping("/")
    public ResponseEntity<Void> assignLocation(@RequestBody LocationSupporter locationSupporter) {
        supporterService.assignLocation(locationSupporter.getLocationName(),locationSupporter.getName());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/")
    public ResponseEntity<Page<SupporterDTO>> getAllSupportersPaged(int page, int size) {
        Page<SupporterDTO> supporterDTOS = supporterService.getAllSupportersPaged(page, size);
        return ResponseEntity.ok(supporterDTOS);
    }


}
