package com.kerfaiyassine.team.controllers;


import com.kerfaiyassine.team.dto.TeamCreationDTO;
import com.kerfaiyassine.team.dto.TeamDTO;
import com.kerfaiyassine.team.dto.TeamRanking;
import com.kerfaiyassine.team.enums.TeamStatus;
import com.kerfaiyassine.team.services.TeamService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@RestController
@RequestMapping("/team")
@CrossOrigin("*")
public class TeamController {

    private final TeamService  teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/")
    public ResponseEntity<Page<TeamDTO>> getAllTeams(@RequestParam(defaultValue = "0") int page,
                                                     @RequestParam(defaultValue = "5") int size){
        Page<TeamDTO> teams = teamService.getAllTeams(page, size);
        return ResponseEntity.ok(teams);
    }

    @PostMapping("/")
    public ResponseEntity<TeamDTO>  createTeam(@RequestBody TeamCreationDTO teamDTO){
        TeamDTO team = teamService.addNewTeam(teamDTO);
        return ResponseEntity.ok(team);
    }

    @GetMapping("/ranking")
    public ResponseEntity<Page<TeamRanking>> getTeamRanking(@RequestParam(defaultValue = "0") int page,
                                                            @RequestParam(defaultValue = "5") int size){
        Page<TeamRanking> rankings = teamService.getTeamsRanking(page, size);
        return ResponseEntity.ok(rankings);
    }

    @PatchMapping("/")
    public ResponseEntity<Void> changeStatus(@RequestParam String id, @RequestParam TeamStatus teamStatus){
        teamService.changeStatus(id, teamStatus);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/")
    public ResponseEntity<Void> updateBudget(@RequestParam String id, @RequestParam int budget){
        teamService.updateBudget(id, budget);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/")
    public ResponseEntity<List<TeamDTO>> getTeamsByYear(@RequestParam int year, @RequestParam int page, @RequestParam int size){
        return ResponseEntity.ok(teamService.getTeamsByYear(year, page, size));
    }

    @GetMapping("/")
    public ResponseEntity<List<TeamDTO>> getTeamsByCity(@RequestParam String city, @RequestParam int page, @RequestParam int size){
        return ResponseEntity.ok(teamService.getTeamsByCity(city, page, size));
    }

    @GetMapping("/")
    public ResponseEntity<List<TeamDTO>> getTeamsByTeamStatus(@RequestParam TeamStatus teamStatus, @RequestParam int page, @RequestParam int size){
        return ResponseEntity.ok(teamService.getTeamsByTeamStatus(teamStatus, page, size));
    }

    @GetMapping("/search")
    public ResponseEntity<TeamDTO> getTeamsByName(@RequestParam String name){
        return ResponseEntity.ok(teamService.getTeamByName(name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeam(@PathVariable String id){
        teamService.deleteTeam(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamDTO> getTeamById(@PathVariable String id){
        return ResponseEntity.ok(teamService.getTeamById(id));
    }
}
