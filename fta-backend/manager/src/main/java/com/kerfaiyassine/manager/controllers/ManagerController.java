package com.kerfaiyassine.manager.controllers;


import com.kerfaiyassine.manager.dtos.ManagerCreationDTO;
import com.kerfaiyassine.manager.dtos.ManagerDTO;
import com.kerfaiyassine.manager.dtos.ManagerStatusDTO;
import com.kerfaiyassine.manager.enums.ManagerStatus;
import com.kerfaiyassine.manager.services.ManagerService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
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



@RestController
@RequestMapping("/manager")
@CrossOrigin("*")
public class ManagerController {

    private final ManagerService managerService;

    public ManagerController(ManagerService managerService) {
        this.managerService = managerService;
    }


    @GetMapping("/status")
    @Operation(summary = "Get managers by status")
    public ResponseEntity<Page<ManagerStatusDTO>> getManagersWithStatus(@RequestParam(defaultValue = "0") int page,
                                                                  @RequestParam(defaultValue = "5") int size) {
        Page<ManagerStatusDTO> managerStatusDTOPage = managerService.getManagersWithStatus(page, size);
        return ResponseEntity.ok(managerStatusDTOPage);
    }

    @GetMapping("/nationality")
    @Operation(summary = "List by nationalities")
    public ResponseEntity<Page<ManagerDTO>> getManagersByNationality(@Valid @RequestParam String nationality, @RequestParam(defaultValue = "0") int page,
                                                                     @RequestParam(defaultValue = "5") int size){
        Page<ManagerDTO> managers = managerService.getManagersByNationality(nationality, page, size);
        return ResponseEntity.ok(managers);
    }

    @PatchMapping("/")
    @Operation(summary = "Update a manager")
    public ResponseEntity<Void> changeStatus(@Valid @RequestParam String id, @Valid @RequestParam ManagerStatus managerStatus){
        managerService.changeStatus(id,managerStatus);
        return ResponseEntity.noContent().build();

    }

    @GetMapping("/{id}")
    @Operation(summary = "Get manager by ID")
    public ResponseEntity<ManagerDTO> getManagerById(@Valid @PathVariable String id){
        ManagerDTO managerDTO = managerService.getManager(id);
        if (managerDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(managerDTO);
    }

    @GetMapping("/")
    @Operation(summary = "Get all the managers")
    public ResponseEntity<Page<ManagerDTO>> getAllManagers(@RequestParam(defaultValue = "0") int page,
                                                           @RequestParam(defaultValue = "5") int size){
        Page<ManagerDTO> managerDTOS = managerService.getManagers(page, size);
        return ResponseEntity.ok(managerDTOS);
    }

    @PostMapping("/")
    @Operation(summary = "Add a manager")
    public ResponseEntity<ManagerDTO> addManager(@Valid @RequestBody ManagerCreationDTO managerCreationDTO){
        ManagerDTO manager = managerService.addManager(managerCreationDTO);
        return ResponseEntity.status(201).body(manager);
    }

    @GetMapping("/stats")
    @Operation(summary = "Get nmber of managers per status")
    public ResponseEntity<Integer> numberOfManagerByStatus(@Valid @RequestParam ManagerStatus managerStatus){
        Integer managerNumber = managerService.numberOfManagerByStatus(managerStatus);
        return ResponseEntity.ok(managerNumber);
    }

}
