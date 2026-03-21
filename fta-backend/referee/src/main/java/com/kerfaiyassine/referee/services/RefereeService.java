package com.kerfaiyassine.referee.services;


import com.kerfaiyassine.referee.dtos.RefereeDTO;
import com.kerfaiyassine.referee.entities.Referee;
import com.kerfaiyassine.referee.repositories.RefereeRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RefereeService {

    private final RefereeRepository refereeRepository;

    public RefereeService(RefereeRepository refereeRepository) {
        this.refereeRepository = refereeRepository;
    }

    public RefereeDTO mapToDTO(Referee referee) {
        RefereeDTO refereeDTO = new RefereeDTO();
        refereeDTO.setId(referee.getId());
        refereeDTO.setName(referee.getName());
        refereeDTO.setNationality(referee.getNationality());
        return refereeDTO;
    }

    @CacheEvict(value = {
            "referees",
            "referees_pages",
            "referees_name"
    }, allEntries = true)
    public RefereeDTO addReferee(RefereeDTO referee) {
        Referee referee1 = new Referee();
        referee1.setId(referee.getId());
        referee1.setName(referee.getName());
        referee1.setNationality(referee.getNationality());
        return mapToDTO(refereeRepository.save(referee1));
    }

    @Cacheable(value = "referees_name", key = "#name")
    public RefereeDTO getRefereeByName(String name) {
        Referee referee = refereeRepository.findRefereeByName(name);
        return mapToDTO(referee);
    }

    @Cacheable(value = "referees", key = "#id")
    public RefereeDTO getReferee(Integer id){
        RefereeDTO refereeDTO = new RefereeDTO();
        Optional<Referee> referee = refereeRepository.findById(id);
        if(referee.isPresent()){
            refereeDTO.setId(referee.get().getId());
            refereeDTO.setName(referee.get().getName());
            refereeDTO.setNationality(referee.get().getNationality());
        }
        return refereeDTO;
    }


    @CacheEvict(value = {
            "referees",
            "referees_pages",
            "referees_name"
    }, allEntries = true)
    public void deleteReferee(Integer id) {
        refereeRepository.deleteById(id);
    }

    @Cacheable(value = "referees_pages", key = "#page + '-' + #size")
    public Page<RefereeDTO> getReferees(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return refereeRepository.findAll(pageable).map(this::mapToDTO);
    }
}


