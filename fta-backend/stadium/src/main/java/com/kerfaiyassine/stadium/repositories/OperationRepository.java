package com.kerfaiyassine.stadium.repositories;

import com.kerfaiyassine.stadium.entities.Operation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OperationRepository extends MongoRepository<Operation, String> {
}
