package com.kerfaiyassine.stadium.controllers;

import com.kerfaiyassine.stadium.dtos.OperationAddDTO;
import com.kerfaiyassine.stadium.dtos.OperationDTO;
import com.kerfaiyassine.stadium.entities.Operation;
import com.kerfaiyassine.stadium.services.OperationService;
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
import jakarta.validation.Valid;

import java.util.List;


@RestController
@RequestMapping("/controller")
@CrossOrigin("*")
public class OperationController {

    private final OperationService operationService;
    public OperationController(OperationService operationService) {
        this.operationService = operationService;
    }

    @PostMapping("/")
    public ResponseEntity<OperationDTO> addOperation(@Valid @RequestBody OperationAddDTO operationDTO,@Valid @RequestParam String stadiumName) {
        OperationDTO operationDTO1 = operationService.addOperation(operationDTO,stadiumName);
        return new ResponseEntity<>(operationDTO1,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OperationDTO> getOperation(@PathVariable String id) {
        OperationDTO operationDTO = operationService.getOperation(id);
        return new ResponseEntity<>(operationDTO,HttpStatus.OK);
    }

    @GetMapping("/duration/{id}")
    public ResponseEntity<Long> getDuration(@PathVariable String id) {
        Long duration = operationService.getRemainingDuration(id);
        return new ResponseEntity<>(duration,HttpStatus.OK);
    }


    @GetMapping("/")
    public ResponseEntity<Page<OperationDTO>> getOperations(@RequestParam int size, @RequestParam int page, @RequestParam String stadiumName) {
        Page<OperationDTO> operationDTOS = operationService.getOperationsByStadium(size,page,stadiumName);
        return new ResponseEntity<>(operationDTOS,HttpStatus.OK);
    }


}
