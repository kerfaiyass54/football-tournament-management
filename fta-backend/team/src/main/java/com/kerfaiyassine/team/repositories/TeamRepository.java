package com.kerfaiyassine.team.repositories;

import com.kerfaiyassine.team.entities.Team;
import com.kerfaiyassine.team.enums.TeamStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface TeamRepository extends MongoRepository<Team, String> {

    public Team findTeamByName(String name);
    public Page<Team> findTeamsByStatus(TeamStatus status, Pageable pageable);
    public Page<Team> findTeamsByCity(String city, Pageable pageable);
    public Page<Team> findTeamsByEstablishYear(int establishYear,Pageable pageable);
    public Team findTeamById(String id);
}
