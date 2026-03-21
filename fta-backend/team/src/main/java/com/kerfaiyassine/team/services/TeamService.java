package com.kerfaiyassine.team.services;


import com.kerfaiyassine.team.dto.TeamCreationDTO;
import com.kerfaiyassine.team.dto.TeamDTO;
import com.kerfaiyassine.team.dto.TeamRanking;
import com.kerfaiyassine.team.entities.Team;
import com.kerfaiyassine.team.enums.TeamStatus;
import com.kerfaiyassine.team.repositories.TeamRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public TeamDTO mapToDTO(Team team){
        TeamDTO teamDTO = new TeamDTO();
        teamDTO.setName(team.getName());
        teamDTO.setBudget(team.getBudget());
        teamDTO.setCity(team.getCity());
        teamDTO.setStatus(team.getStatus());
        teamDTO.setEstablishYear(team.getEstablishYear());
        teamDTO.setRank(team.getRank());
        return teamDTO;
    }

    public Team mapToEntity(TeamCreationDTO teamDTO){
        Team team = new Team();
        team.setName(teamDTO.getName());
        team.setBudget(100);
        team.setCity(teamDTO.getCity());
        team.setStatus(TeamStatus.CAN_PLAY);
        team.setEstablishYear(teamDTO.getEstablishYear());
        team.setRank(0);
        return team;
    }

    public TeamRanking mapToRankingDTO(Team team){
        TeamRanking teamRankingDTO = new TeamRanking();
        teamRankingDTO.setName(team.getName());
        teamRankingDTO.setRank(team.getRank());
        return teamRankingDTO;
    }

    public Page<TeamDTO> getAllTeams(int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return teamRepository.findAll(pageable).map(this::mapToDTO);
    }

    public TeamDTO addNewTeam(TeamCreationDTO teamCreationDTO){
        Team team = mapToEntity(teamCreationDTO);
        return mapToDTO(teamRepository.save(team));
    }

    public Page<TeamRanking> getTeamsRanking(int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return teamRepository.findAll(pageable).map(this::mapToRankingDTO);
    }

    public void changeStatus(String id, TeamStatus teamStatus){
        Team team = teamRepository.findTeamById(id);
        team.setStatus(teamStatus);
        teamRepository.save(team);
    }

    public void updateBudget(String id, int budget){
        Team team = teamRepository.findTeamById(id);
        team.setBudget(budget);
        teamRepository.save(team);
    }

    public List<TeamDTO> getTeamsByYear(int year, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return teamRepository.findTeamsByEstablishYear(year,pageable).stream().map(this::mapToDTO).toList();
    }

    public List<TeamDTO> getTeamsByCity(String city, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return teamRepository.findTeamsByCity(city,pageable).stream().map(this::mapToDTO).toList();
    }

    public List<TeamDTO> getTeamsByTeamStatus(TeamStatus teamStatus, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return teamRepository.findTeamsByStatus(teamStatus,pageable).stream().map(this::mapToDTO).toList();
    }

    public TeamDTO getTeamByName(String name){
        return mapToDTO(teamRepository.findTeamByName(name));
    }
    
    public void deleteTeam(String id){
        teamRepository.delete(teamRepository.findTeamById(id));
    }

    public TeamDTO getTeamById(String id){
        return mapToDTO(teamRepository.findTeamById(id));
    }



}
