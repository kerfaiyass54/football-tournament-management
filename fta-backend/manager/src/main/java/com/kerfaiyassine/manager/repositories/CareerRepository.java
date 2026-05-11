package com.kerfaiyassine.manager.repositories;

import com.kerfaiyassine.manager.entities.Career;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CareerRepository extends MongoRepository<Career, String> {


    List<Career> findByManagerId(String managerId);

    List<Career> findByTeamId(String teamId);
}
