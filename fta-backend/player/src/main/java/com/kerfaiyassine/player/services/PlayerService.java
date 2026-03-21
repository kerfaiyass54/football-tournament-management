package com.kerfaiyassine.player.services;

import com.kerfaiyassine.player.dtos.PlayerDTO;
import com.kerfaiyassine.player.entities.Player;
import com.kerfaiyassine.player.enums.PlayerSituation;
import com.kerfaiyassine.player.enums.PlayerStatus;
import com.kerfaiyassine.player.repositories.PlayerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Slf4j
public class PlayerService {

    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    // ------------------ MAPPING ------------------

    public PlayerDTO mapToDTO(Player player) {
        if (player == null) return null;

        PlayerDTO playerDTO = new PlayerDTO();
        playerDTO.setId(player.getId());
        playerDTO.setName(player.getName());
        playerDTO.setNationality(player.getNationality());
        playerDTO.setPosition(player.getPosition());
        playerDTO.setAbility(player.getAbility());
        playerDTO.setSituation(player.getLineup());
        playerDTO.setMarketValue(player.getMarketValue());
        playerDTO.setHeight(player.getHeight());
        playerDTO.setWeight(player.getWeight());
        playerDTO.setYearOfBirth(player.getYearOfBirth());
        playerDTO.setStatus(player.getStatus());
        return playerDTO;
    }

    // ------------------ CREATE ------------------

    @CacheEvict(value = {
            "players",
            "players_pages",
            "players_nationality",
            "players_highest_price"
    }, allEntries = true)
    public PlayerDTO addPlayer(PlayerDTO playerDTO) {

        Player player = new Player();
        player.setName(playerDTO.getName());
        player.setNationality(playerDTO.getNationality());
        player.setPosition(playerDTO.getPosition());
        player.setAbility(65);
        player.setYearOfBirth(playerDTO.getYearOfBirth());
        player.setMarketValue(0.0);
        player.setLineup(PlayerSituation.FREE);
        player.setNumber(0);
        player.setWeight(playerDTO.getWeight());
        player.setStatus(PlayerStatus.NEW);

        Player playerSaved = playerRepository.save(player);
        return mapToDTO(playerSaved);
    }

    // ------------------ READ ------------------

    @Cacheable(value = "players", key = "#id")
    public PlayerDTO getPlayerById(String id) {
        log.info("Fetching player from DB by id: {}", id);
        return mapToDTO(playerRepository.findPlayerById(id));
    }

    @Cacheable(value = "players", key = "'name_' + #name")
    public PlayerDTO getPlayerByName(String name) {
        log.info("Fetching player from DB by name: {}", name);
        return mapToDTO(playerRepository.findPlayerByName(name));
    }

    @Cacheable(value = "players_nationality",
            key = "#nationality + '-' + #page + '-' + #size")
    public List<PlayerDTO> getAllPlayersByNationality(
            String nationality,
            int size,
            int page
    ) {
        log.info("Fetching players by nationality from DB");
        Pageable pageable = PageRequest.of(page, size);

        return playerRepository
                .findPlayersByNationality(nationality, pageable)
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    @Cacheable(value = "players_pages", key = "#page + '-' + #size")
    public Page<PlayerDTO> getAllPlayers(int size, int page) {
        log.info("Fetching players page from DB");
        Pageable pageable = PageRequest.of(page, size);
        return playerRepository.findAll(pageable).map(this::mapToDTO);
    }

    @Cacheable(value = "players_highest_price")
    public Double getHighestPrice() {
        log.info("Fetching highest price from DB");
        return playerRepository.findAll()
                .stream()
                .map(Player::getMarketValue)
                .filter(Objects::nonNull)
                .mapToDouble(Double::doubleValue)
                .max()
                .orElse(0.0);
    }

    // ------------------ UPDATE ------------------

    @CacheEvict(value = {
            "players",
            "players_pages",
            "players_nationality",
            "players_highest_price"
    }, allEntries = true)
    public Player updatePlayer(PlayerDTO playerDTO, String id) {

        Player player = playerRepository.findPlayerById(id);

        player.setName(playerDTO.getName());
        player.setNationality(playerDTO.getNationality());
        player.setPosition(playerDTO.getPosition());
        player.setAbility(playerDTO.getAbility());
        player.setYearOfBirth(playerDTO.getYearOfBirth());
        player.setWeight(playerDTO.getWeight());
        player.setStatus(playerDTO.getStatus());
        player.setMarketValue(playerDTO.getMarketValue());
        player.setHeight(playerDTO.getHeight());

        return playerRepository.save(player);
    }

    // ------------------ DELETE ------------------

    @CacheEvict(value = {
            "players",
            "players_pages",
            "players_nationality",
            "players_highest_price"
    }, allEntries = true)
    public void deletePlayer(String id) {
        playerRepository.delete(playerRepository.findPlayerById(id));
    }
}