package com.kerfaiyassine.player.repositories;


import com.kerfaiyassine.player.entities.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PlayerRepository extends MongoRepository<Player, Long> {

    public Player findPlayerByName(String name);

    public Page<Player> findPlayersByNationality(String nationality,  Pageable pageable);

    public Player findPlayerById(String id);

}
