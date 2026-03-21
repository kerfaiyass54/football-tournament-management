package com.kerfaiyassine.manager.repositories;

import com.kerfaiyassine.manager.entities.Career;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CareerRepository extends MongoRepository<Career, Long> {


}
