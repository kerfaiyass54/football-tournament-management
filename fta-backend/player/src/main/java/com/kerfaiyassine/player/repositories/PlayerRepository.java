package com.kerfaiyassine.player.repositories;


import com.kerfaiyassine.player.entities.Player;
import com.kerfaiyassine.player.enums.PlayerPosition;
import com.kerfaiyassine.player.enums.PlayerSituation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface PlayerRepository extends MongoRepository<Player, String> {

    public Player findPlayerByName(String name);

    public Page<Player> findPlayersByNationality(String nationality,  Pageable pageable);

    public Player findPlayerById(String id);

    List<Player> findByContractsContains(String contractId);

    List<Player> findByPosition(PlayerPosition position);

    List<Player> findByAbilityGreaterThanEqual(Integer ability);

    List<Player> findByPositionAndAbilityGreaterThanEqual(
            PlayerPosition position,
            Integer ability
    );

    List<Player> findByLineup(PlayerSituation lineup);

}
