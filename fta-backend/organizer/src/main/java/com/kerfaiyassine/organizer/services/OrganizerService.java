package com.kerfaiyassine.organizer.services;


import com.kerfaiyassine.organizer.dtos.OrganizerDTO;
import com.kerfaiyassine.organizer.entities.Organizer;
import com.kerfaiyassine.organizer.repositories.OrganizerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class OrganizerService {

    private final OrganizerRepository organizerRepository;

    public OrganizerService(OrganizerRepository organizerRepository) {
        this.organizerRepository = organizerRepository;
    }

    public OrganizerDTO mapToDTO(Organizer organizer) {
        OrganizerDTO organizerDTO = new OrganizerDTO();
        organizerDTO.setId(organizer.getId());
        organizerDTO.setName(organizer.getName());
        return organizerDTO;
    }

    @CacheEvict(value = {
            "builders",
            "builders_pages"
    }, allEntries = true)
    public Organizer addNewOrganizer(String name){
        Organizer organizer = new Organizer();
        organizer.setName(name);
        return organizerRepository.save(organizer);
    }

    @CacheEvict(value = {
            "builders",
            "builders_pages"
    }, allEntries = true)
    public void updateOrganizer(Integer id, String name){
        Optional<Organizer> organizer = organizerRepository.findById(id);
        if(organizer.isPresent()){
            Organizer organizer1 = organizer.get();
            organizer1.setName(name);
            organizerRepository.save(organizer1);
        }
    }

    @Cacheable(value = "builders", key = "#id")
    public OrganizerDTO getOrganizerById(Integer id){
        Optional<Organizer> organizer = organizerRepository.findById(id);
        return organizer.map(this::mapToDTO).orElse(null);
    }

    @Cacheable(value = "builders_pages", key = "#page + '-' + #size")
    public Page<OrganizerDTO> getOrganizers(int size, int page){
        Pageable pageable = PageRequest.of(page, size);
        return organizerRepository.findAll(pageable).map(this::mapToDTO);
    }

    @CacheEvict(value = {
            "builders",
            "builders_pages"
    }, allEntries = true)
    public void deleteOrganizer(Integer id){
        organizerRepository.deleteById(id);
    }
}
