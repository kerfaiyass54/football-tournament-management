package com.kerfaiyassine.stadium.repositories;


import com.kerfaiyassine.stadium.entities.Stadium;
import com.kerfaiyassine.stadium.enums.StadiumTypes;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StadiumRepository extends MongoRepository<Stadium,String> {

    List<Stadium> findStadiumsByCountry(String country);

    List<Stadium> findStadiumsByType(StadiumTypes type);

    Stadium findStadiumByName(String name);
}
