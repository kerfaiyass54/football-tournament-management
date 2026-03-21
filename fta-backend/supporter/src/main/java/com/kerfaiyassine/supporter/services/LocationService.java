package com.kerfaiyassine.supporter.services;


import com.kerfaiyassine.supporter.DTOs.LocationDTO;
import com.kerfaiyassine.supporter.entities.Location;
import com.kerfaiyassine.supporter.enums.Continent;
import com.kerfaiyassine.supporter.repositories.LocationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class LocationService {

    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public LocationDTO mapToDTO(Location location){
        LocationDTO locationDTO = new LocationDTO();
        locationDTO.setId(location.getId());
        locationDTO.setName(location.getName());
        return locationDTO;
    }

    public LocationDTO saveLocation(LocationDTO locationDTO){
        Location location = new Location();
        location.setName(locationDTO.getName());
        return mapToDTO(locationRepository.save(location));
    }

    public LocationDTO getLocation(String locationName){
        Location location = locationRepository.findLocationByName(locationName);
        return mapToDTO(location);
    }

    public List<LocationDTO> getLocations(){
        return locationRepository.findAll().stream().map(this::mapToDTO).toList();
    }

    public void deleteLocation(String locationName){
        locationRepository.deleteById(locationName);
    }

    public int numberOfHabitants(String locationName){
        Location location = locationRepository.findLocationByName(locationName);
        return location.getSupporters().size();
    }

    public Page<LocationDTO> getLocationsPage(int  page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return locationRepository.findAll(pageable).map(this::mapToDTO);
    }

    public Page<LocationDTO> getLocationsPageByContinent(int page, int size, Continent continent){
        Pageable pageable = PageRequest.of(page, size);
        return locationRepository.findLocationByContinent(continent, pageable).map(this::mapToDTO);
    }




}
