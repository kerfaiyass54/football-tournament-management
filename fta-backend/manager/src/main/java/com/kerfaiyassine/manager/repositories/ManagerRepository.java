package com.kerfaiyassine.manager.repositories;


import com.kerfaiyassine.manager.entities.Manager;
import com.kerfaiyassine.manager.enums.ManagerStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ManagerRepository extends MongoRepository<Manager, Long> {

    public Page<Manager> findManagersByNationality(String nationality, Pageable pageable);

    public List<Manager> findManagersByStatus(ManagerStatus status);

}
