package com.kerfaiyassine.player.repositories;

import com.kerfaiyassine.player.entities.Contract;
import com.kerfaiyassine.player.enums.ContractStatus;
import com.kerfaiyassine.player.enums.ContractType;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ContractRepository extends MongoRepository<Contract, String > {

    List<Contract> findByPlayerId(String playerId);

    List<Contract> findByTeamId(String teamId);

    List<Contract> findByPlayerIdAndContractType(
            String playerId,
            ContractType type
    );

    List<Contract> findByPlayerIdAndContractStatus(
            String playerId,
            ContractStatus status
    );

}
