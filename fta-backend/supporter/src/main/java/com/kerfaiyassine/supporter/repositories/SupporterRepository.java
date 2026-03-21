package com.kerfaiyassine.supporter.repositories;

import com.kerfaiyassine.supporter.entities.Supporter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface SupporterRepository extends MongoRepository<Supporter, String> {

    Page<Supporter> findSupporterByNationality(String nationality, Pageable pageable);

    Page<Supporter> findSupporterByLocationId(String locationId, Pageable pageable);

    Supporter findSupporterByName(String name);

}
