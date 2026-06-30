package com.kerfaiyassine.stadium.repositories;

import com.kerfaiyassine.stadium.entities.Operation;
import com.kerfaiyassine.stadium.entities.Stadium;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.Instant;
import java.util.List;

public interface OperationRepository extends MongoRepository<Operation, String> {

    Page<Operation> findOperationsByStadium(Stadium stadium, Pageable pageable);

    List<Operation> findByStadium(Stadium stadium);

    List<Operation> findByStadiumAndEndTimeAfter(
            Stadium stadium,
            Instant instant
    );

    List<Operation> findByStadiumAndEndTimeBefore(
            Stadium stadium,
            Instant instant
    );

    List<Operation> findByStadiumBuilderId(Long builderId);

    List<Operation> findByStadiumBuilderIdAndEndTimeAfter(
            Long builderId,
            Instant instant
    );

    List<Operation> findByStadiumBuilderIdAndEndTimeBefore(
            Long builderId,
            Instant instant
    );

}
