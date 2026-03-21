package com.kerfaiyassine.referee.controllers;


import com.kerfaiyassine.referee.dtos.RefereeDTO;
import com.kerfaiyassine.referee.services.RefereeService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/referee")
@CrossOrigin("*")
public class RefereeController {

    private final RefereeService refereeService;

    public RefereeController(RefereeService refereeService) {
        this.refereeService = refereeService;
    }


    @PostMapping("/")
    @Operation(summary = "Create referee")
    public ResponseEntity<RefereeDTO> saveReferee(@RequestBody RefereeDTO refereeDTO) {
        RefereeDTO referee = refereeService.addReferee(refereeDTO);
        return ResponseEntity.ok(referee);
    }

    @GetMapping("")
    @Operation(summary = "See paged referees")
    public ResponseEntity<Page<RefereeDTO>> getAllReferees(@RequestParam int page, @RequestParam int size) {
        Page<RefereeDTO> refereeDTOS = refereeService.getReferees(page, size);
        return ResponseEntity.ok(refereeDTOS);
    }

    @GetMapping("/")
    @Operation(summary = "Get a referee")
    public ResponseEntity<RefereeDTO> getReferee(@RequestParam String name) {
        RefereeDTO refereeDTO = refereeService.getRefereeByName(name);
        return ResponseEntity.ok(refereeDTO);
    }

    @GetMapping("/")
    @Operation(summary = "Get referee by id")
    public ResponseEntity<RefereeDTO> getReferee(@RequestParam Integer id) {
        RefereeDTO refereeDTO = refereeService.getReferee(id);
        return ResponseEntity.ok(refereeDTO);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a referee")
    public ResponseEntity<Void> deleteReferee(@PathVariable("id") Integer id) {
        refereeService.deleteReferee(id);
        return ResponseEntity.ok().build();
    }
}
