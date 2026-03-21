package com.kerfaiyassine.player.repositories;

import com.kerfaiyassine.player.entities.Contract;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContractRepository extends MongoRepository<Contract, String > {

}
