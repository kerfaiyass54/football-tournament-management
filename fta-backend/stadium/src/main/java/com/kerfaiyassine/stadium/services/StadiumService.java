package com.kerfaiyassine.stadium.services;

import com.kerfaiyassine.stadium.dtos.OperationRequestDTO;
import com.kerfaiyassine.stadium.entities.Operation;
import com.kerfaiyassine.stadium.entities.Stadium;
import com.kerfaiyassine.stadium.enums.OperationType;
import com.kerfaiyassine.stadium.repositories.OperationRepository;
import com.kerfaiyassine.stadium.repositories.StadiumRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StadiumService {

    private final StadiumRepository stadiumRepository;

    private final OperationRepository operationRepository;

    public StadiumService(
            StadiumRepository stadiumRepository,
            OperationRepository operationRepository
    ) {
        this.stadiumRepository = stadiumRepository;
        this.operationRepository = operationRepository;
    }

    public Stadium addStadium(Stadium stadium) {

        return stadiumRepository.save(stadium);
    }

    public List<Stadium> getBuilderStadiums(Long builderId) {

        return stadiumRepository.findByBuilderId(builderId);
    }

    public Map<String, Object> getStats() {

        List<Stadium> stadiums = stadiumRepository.findAll();

        Map<String, Long> types = new HashMap<>();

        for (Stadium stadium : stadiums) {

            String type = stadium.getType().name();

            types.put(
                    type,
                    types.getOrDefault(type, 0L) + 1
            );
        }

        Map<String, Object> stats = new HashMap<>();

        stats.put("totalStadiums", stadiums.size());
        stats.put("stadiumsByType", types);

        return stats;
    }

    public List<Operation> getOperations(String stadiumId) {

        Stadium stadium = stadiumRepository.findById(stadiumId)
                .orElseThrow(
                        () -> new RuntimeException("Stadium not found")
                );

        return operationRepository.findByStadium(stadium);
    }

    public Operation addOperation(
            String stadiumId,
            OperationRequestDTO dto
    ) {

        Stadium stadium = stadiumRepository.findById(stadiumId)
                .orElseThrow(
                        () -> new RuntimeException("Stadium not found")
                );

        Operation operation = new Operation();

        operation.setName(dto.getName());

        operation.setDescription(dto.getDescription());

        operation.setType(
                OperationType.valueOf(dto.getType())
        );

        operation.setStartTime(Instant.now());

        operation.setEndTime(
                Instant.now().plus(
                        dto.getDurationInDays(),
                        ChronoUnit.DAYS
                )
        );

        operation.setStadium(stadium);

        Operation savedOperation =
                operationRepository.save(operation);

        return savedOperation;
    }
}