package com.kerfaiyassine.stadium.repositories;


import com.kerfaiyassine.stadium.entities.Stadium;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StadiumRepository extends MongoRepository<Stadium,String> {


}
