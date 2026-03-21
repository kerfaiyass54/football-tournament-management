package com.kerfaiyassine.player.controllers;


import com.kerfaiyassine.player.dtos.PlayerDTO;
import com.kerfaiyassine.player.entities.Player;
import com.kerfaiyassine.player.services.PlayerService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@RestController
@RequestMapping("/player")
@CrossOrigin("*")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @PostMapping("/")
    @Operation(summary = "Create player")
    public ResponseEntity<PlayerDTO> createPlayer(@RequestBody PlayerDTO playerDTO) {
        PlayerDTO  player = playerService.addPlayer(playerDTO);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Find player by id")
    public ResponseEntity<PlayerDTO> findPlayerById(@PathVariable String id) {
        PlayerDTO playerDTO = playerService.getPlayerById(id);
        return new ResponseEntity<>(playerDTO, HttpStatus.OK);
    }

    @GetMapping("/")
    @Operation(summary = "Find player by name")
    public ResponseEntity<PlayerDTO> findPlayerByName(@RequestParam String name) {
        PlayerDTO playerDTO = playerService.getPlayerByName(name);
        return new ResponseEntity<>(playerDTO, HttpStatus.OK);
    }

    @GetMapping("/")
    @Operation(summary = "Find plaers by nationality")
    public ResponseEntity<List<PlayerDTO>> findAllPlayersByNationality(@RequestParam String nationality, @RequestParam int size, @RequestParam int page) {
        List<PlayerDTO> players = playerService.getAllPlayersByNationality(nationality, size, page);
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update players")
    public ResponseEntity<Player> updatePlayer(@PathVariable String id, @RequestBody PlayerDTO playerDTO) {
        Player player = playerService.updatePlayer(playerDTO, id);
        return new ResponseEntity<>(player, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete player by id")
    public ResponseEntity<Void> deletePlayer(@PathVariable String id) {
        playerService.deletePlayer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/")
    @Operation(summary = "Get all players")
    public ResponseEntity<Page<PlayerDTO>> getAllPlayers(@RequestParam int size, @RequestParam int page){
        Page<PlayerDTO>  players = playerService.getAllPlayers(size, page);
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping("/highest")
    @Operation(summary = "Get highest priced player")
    public ResponseEntity<Double> getHighestPrice(){
        Double highestPrice = playerService.getHighestPrice();
        return new ResponseEntity<>(highestPrice, HttpStatus.OK);
    }


}
