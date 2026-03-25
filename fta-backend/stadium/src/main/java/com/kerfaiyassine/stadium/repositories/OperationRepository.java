package com.kerfaiyassine.stadium.repositories;

import com.kerfaiyassine.stadium.entities.Operation;
import com.kerfaiyassine.stadium.entities.Stadium;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OperationRepository extends MongoRepository<Operation, String> {

    Page<Operation> findOperationsByStadium(Stadium stadium, Pageable pageable);
}
