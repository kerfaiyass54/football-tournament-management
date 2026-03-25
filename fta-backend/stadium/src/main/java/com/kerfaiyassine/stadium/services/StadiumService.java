package com.kerfaiyassine.stadium.services;


import com.kerfaiyassine.stadium.dtos.StadiumDTO;
import com.kerfaiyassine.stadium.dtos.StadiumDTOCreation;
import com.kerfaiyassine.stadium.entities.Stadium;
import com.kerfaiyassine.stadium.enums.StadiumTypes;
import com.kerfaiyassine.stadium.repositories.StadiumRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class StadiumService {

    private final StadiumRepository stadiumRepository;
    public StadiumService(StadiumRepository stadiumRepository) {
        this.stadiumRepository = stadiumRepository;
    }

    public StadiumDTO getStadiumDTO(Stadium stadium) {
        StadiumDTO stadiumDTO = new StadiumDTO();
        stadiumDTO.setId(stadium.getId());
        stadiumDTO.setName(stadium.getName());
        stadiumDTO.setCapacity(stadium.getCapacity());
        stadiumDTO.setYearOfEstablishment(stadium.getYearOfEstablishment());
        stadiumDTO.setType(stadium.getType());
        return stadiumDTO;
    }

    public Stadium getStadium(StadiumDTOCreation stadiumDTO) {
        Stadium stadium = new Stadium();
        stadium.setName(stadiumDTO.getName());
        stadium.setCapacity(stadiumDTO.getCapacity());
        stadium.setType(stadiumDTO.getType());
        stadium.setYearOfEstablishment(stadiumDTO.getYearOfEstablishment());
        return stadium;
    }

    public StadiumDTO addStadium(StadiumDTOCreation stadiumDTOCreation){
        Stadium stadium = getStadium(stadiumDTOCreation);
        Stadium stade = stadiumRepository.save(stadium);
        return getStadiumDTO(stade);
    }

    public StadiumDTO getStadium(String id){
        Optional<Stadium> stadium = stadiumRepository.findById(id);
        return stadium.map(this::getStadiumDTO).orElse(null);
    }

    public List<StadiumDTO> getStadiumsByCountry(String country){
        return stadiumRepository.findStadiumsByCountry(country).stream().map(this::getStadiumDTO).toList();
    }

    public List<StadiumDTO> getStadiumsByType(StadiumTypes type){
        return stadiumRepository.findStadiumsByType(type).stream().map(this::getStadiumDTO).toList();
    }


}
