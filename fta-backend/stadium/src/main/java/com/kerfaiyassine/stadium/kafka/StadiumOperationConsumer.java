package com.kerfaiyassine.stadium.kafka;

import com.kerfaiyassine.stadium.dtos.OperationRequestDTO;
import com.kerfaiyassine.stadium.services.StadiumService;
import com.kerfaiyassine.team.kafka.StadiumOperationMessage;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class StadiumOperationConsumer {

    private final StadiumService stadiumService;

    public StadiumOperationConsumer(
            StadiumService stadiumService
    ) {
        this.stadiumService = stadiumService;
    }

    @KafkaListener(
            topics = "stadium-operation-topic",
            groupId = "stadium-group"
    )
    public void consume(
            StadiumOperationMessage message
    ) {

        OperationRequestDTO dto =
                new OperationRequestDTO();

        dto.setName(
                message.getOperationName()
        );

        dto.setDescription(
                message.getDescription()
        );

        dto.setType(
                message.getType()
        );

        dto.setDurationInDays(
                message.getDurationInDays()
        );

        stadiumService.addOperation(
                message.getStadiumId(),
                dto
        );
    }
}