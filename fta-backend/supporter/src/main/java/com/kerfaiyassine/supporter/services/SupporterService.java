package com.kerfaiyassine.supporter.services;


import com.kerfaiyassine.supporter.DTOs.SupporterDTO;
import com.kerfaiyassine.supporter.entities.Location;
import com.kerfaiyassine.supporter.entities.Supporter;
import com.kerfaiyassine.supporter.repositories.LocationRepository;
import com.kerfaiyassine.supporter.repositories.SupporterRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class SupporterService {

    private final SupporterRepository supporterRepository;
    private final LocationRepository locationRepository;

    public SupporterService(SupporterRepository supporterRepository, LocationRepository locationRepository) {
        this.supporterRepository = supporterRepository;
        this.locationRepository = locationRepository;
    }

    public SupporterDTO mapToDTO(Supporter supporter) {
        SupporterDTO supporterDTO = new SupporterDTO();
        supporterDTO.setId(String.valueOf(supporter.getId()));
        supporterDTO.setName(supporter.getName());
        supporterDTO.setNationality(supporter.getNationality());
        supporterDTO.setLocationId(supporter.getLocationId());
        return supporterDTO;
    }

    public SupporterDTO save(SupporterDTO supporter) {
        Supporter supporterEntity = new Supporter();
        supporterEntity.setName(supporter.getName());
        supporterEntity.setLocationId(supporter.getLocationId());
        supporterRepository.save(supporterEntity);
        return mapToDTO(supporterEntity);
    }


    public SupporterDTO getSupporterByID(String id) {
        Optional<Supporter> supporter = supporterRepository.findById(id);
        return supporter.map(this::mapToDTO).orElse(null);
    }

    public Page<SupporterDTO> getSupportersByLocation(String location, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return supporterRepository.findSupporterByLocationId(location, pageable).map(this::mapToDTO);
    }

    public List<SupporterDTO> getAllSupporters() {
        return supporterRepository.findAll().stream().map(this::mapToDTO).toList();
    }

    public void deleteSupporterByID(String id) {
        supporterRepository.deleteById(id);
    }

    public SupporterDTO getByName(String name) {
        return mapToDTO(supporterRepository.findSupporterByName(name));
    }

    public Page<SupporterDTO> getByNationality(String nationality, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return supporterRepository.findSupporterByNationality(nationality, pageable).map(this::mapToDTO);
    }

    public void assignLocation(String locationName,String name){
        Location location = locationRepository.findLocationByName(locationName);
        supporterRepository.findSupporterByName(name).setLocationId(location.getId());
    }

    public Page<SupporterDTO> getAllSupportersPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return supporterRepository.findAll(pageable).map(this::mapToDTO);
    }


}
