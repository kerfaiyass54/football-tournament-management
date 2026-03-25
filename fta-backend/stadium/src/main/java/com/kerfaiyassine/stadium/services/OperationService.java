package com.kerfaiyassine.stadium.services;


import com.kerfaiyassine.stadium.dtos.OperationAddDTO;
import com.kerfaiyassine.stadium.dtos.OperationDTO;
import com.kerfaiyassine.stadium.entities.Operation;
import com.kerfaiyassine.stadium.entities.Stadium;
import com.kerfaiyassine.stadium.repositories.OperationRepository;
import com.kerfaiyassine.stadium.repositories.StadiumRepository;
import com.kerfaiyassine.stadium.utils.OperationDurationUtils;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;

@Service
@Slf4j
public class OperationService {

    private final OperationRepository operationRepository;
    private final StadiumRepository stadiumRepository;

    public OperationService(OperationRepository operationRepository, StadiumRepository stadiumRepository) {
        this.operationRepository = operationRepository;
        this.stadiumRepository = stadiumRepository;
    }

    public Operation getOperation(OperationAddDTO operation) {
        Operation operationEntity = new Operation();
        operationEntity.setDescription(operation.getDescription());
        operationEntity.setName(operation.getName());
        operationEntity.setStartTime(operation.getStartTime());
        operationEntity.setEndTime(operation.getEndTime());
        operationEntity.setType(operation.getOperationType());
        return operationEntity;
    }

    public OperationDTO  getOperationDTO(Operation operation) {
        OperationDTO operationDTO = new OperationDTO();
        operationDTO.setDescription(operation.getDescription());
        operationDTO.setName(operation.getName());
        operationDTO.setId(operation.getId());
        operationDTO.setStadiumName(operation.getStadium().getName());
        operationDTO.setDuration(OperationDurationUtils.getDurationInDays(operation.getStartTime(),operation.getEndTime()));
        return operationDTO;
    }

    public OperationDTO addOperation(OperationAddDTO operationAddDTO, String stadiumName) {
        Operation operation = getOperation(operationAddDTO);
        Stadium stadium = stadiumRepository.findStadiumByName(stadiumName);
        operation.setStadium(stadium);
        Operation operationEntity = operationRepository.save(operation);
        return getOperationDTO(operationEntity);
    }

    public OperationDTO getOperation(String id){
        Optional<Operation> operation = operationRepository.findById(id);
        return operation.map(this::getOperationDTO).orElse(null);
    }

    public long getRemainingDuration(String id){
        Optional<Operation> operation = operationRepository.findById(id);
        Instant now = Instant.now();
        return operation.map(value -> OperationDurationUtils.getDurationInDays(now, value.getEndTime())).orElse(0L);
    }

    public Page<OperationDTO> getOperationsByStadium(int size, int page, String stadiumName) {
        Pageable pageable = PageRequest.of(page, size);
        Stadium stadium = stadiumRepository.findStadiumByName(stadiumName);
        return operationRepository.findOperationsByStadium(stadium,pageable).map(this::getOperationDTO);
    }





}
