package com.kerfaiyassine.organizer.controllers;


import com.kerfaiyassine.organizer.dtos.OrganizerDTO;
import com.kerfaiyassine.organizer.entities.Organizer;
import com.kerfaiyassine.organizer.services.OrganizerService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/organizer")
@CrossOrigin("*")
public class OrganizerController {

    private final OrganizerService organizerService;

    public OrganizerController(OrganizerService organizerService) {
        this.organizerService = organizerService;
    }

    @PostMapping("")
    @Operation(summary = "Add new organizer")
    public ResponseEntity<Organizer> addNewOrganizer(@RequestParam String name){
        Organizer organizer = organizerService.addNewOrganizer(name);
        return new ResponseEntity<>(organizer, HttpStatus.CREATED);
    }

    @PatchMapping("")
    @Operation(summary = "Update organizer")
    public ResponseEntity<Void>  updateOrganizer(@RequestParam Integer id, @RequestParam String name){
        organizerService.updateOrganizer(id, name);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get organizer's information")
    public ResponseEntity<OrganizerDTO> getOrganizer(@PathVariable Integer id){
        OrganizerDTO organizerDTO = organizerService.getOrganizerById(id);
        return new ResponseEntity<>(organizerDTO, HttpStatus.OK);
    }

    @GetMapping("/")
    @Operation(summary = "Get list of organizers")
    public ResponseEntity<Page<OrganizerDTO>> getOrganizers(@RequestParam int size, @RequestParam int page){
        Page<OrganizerDTO> organizerDTOs = organizerService.getOrganizers(size, page);
        return new ResponseEntity<>(organizerDTOs, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete organizer by id")
    public ResponseEntity<Void> deleteOrganizer(@PathVariable Integer id){
        organizerService.deleteOrganizer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
