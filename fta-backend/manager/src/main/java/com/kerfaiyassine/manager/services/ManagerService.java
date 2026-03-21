package com.kerfaiyassine.manager.services;

import com.kerfaiyassine.manager.dtos.ManagerCreationDTO;
import com.kerfaiyassine.manager.dtos.ManagerDTO;
import com.kerfaiyassine.manager.dtos.ManagerStatusDTO;
import com.kerfaiyassine.manager.entities.Manager;
import com.kerfaiyassine.manager.enums.ManagerStatus;
import com.kerfaiyassine.manager.repositories.ManagerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
public class ManagerService {

    private final ManagerRepository managerRepository;

    public ManagerService(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    public ManagerDTO mapToDTO(Manager manager) {
        ManagerDTO managerDTO = new ManagerDTO();
        managerDTO.setId(manager.getId());
        managerDTO.setName(manager.getName());
        managerDTO.setStatus(manager.getStatus());
        managerDTO.setNationality(manager.getNationality());
        managerDTO.setYearOfBirth(manager.getYearOfBirth());
        return managerDTO;
    }

    public Manager mapToCreation(ManagerCreationDTO managerCreationDTO) {
        Manager manager = new Manager();
        manager.setName(managerCreationDTO.getName());
        manager.setNationality(managerCreationDTO.getNationality());
        manager.setYearOfBirth(managerCreationDTO.getYearOfBirth());
        manager.setStatus(ManagerStatus.FREE);
        return manager;
    }

    public ManagerStatusDTO mapToStatusDTO(Manager manager) {
        ManagerStatusDTO managerStatusDTO = new ManagerStatusDTO();
        managerStatusDTO.setName(manager.getName());
        managerStatusDTO.setStatus(manager.getStatus());
        return managerStatusDTO;
    }

    // ================= CREATE =================

    @CacheEvict(value = {
            "managers",
            "managers_pages",
            "managers_by_nationality",
            "managers_status",
            "managers_count"
    }, allEntries = true)
    public ManagerDTO addManager(ManagerCreationDTO managerCreationDTO) {
        Manager manager = managerRepository.save(mapToCreation(managerCreationDTO));
        return mapToDTO(manager);
    }

    // ================= READ =================

    @Cacheable(value = "managers", key = "#id")
    public ManagerDTO getManager(String id) {
        Optional<Manager> manager = managerRepository.findById(Long.valueOf(id));
        return manager.map(this::mapToDTO).orElse(null);
    }

    @Cacheable(value = "managers_pages", key = "#page + '-' + #size")
    public Page<ManagerDTO> getManagers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return managerRepository.findAll(pageable).map(this::mapToDTO);
    }

    @Cacheable(value = "managers_by_nationality",
            key = "#nationality + '-' + #page + '-' + #size")
    public Page<ManagerDTO> getManagersByNationality(String nationality, int size, int page) {
        Pageable pageable = PageRequest.of(page, size);
        return managerRepository
                .findManagersByNationality(nationality, pageable)
                .map(this::mapToDTO);
    }

    @Cacheable(value = "managers_status",
            key = "#page + '-' + #size")
    public Page<ManagerStatusDTO> getManagersWithStatus(int size, int page) {
        Pageable pageable = PageRequest.of(page, size);
        return managerRepository.findAll(pageable).map(this::mapToStatusDTO);
    }

    @Cacheable(value = "managers_count", key = "#managerStatus")
    public Integer numberOfManagerByStatus(ManagerStatus managerStatus) {
        return managerRepository.findManagersByStatus(managerStatus).size();
    }

    // ================= UPDATE =================

    @CacheEvict(value = {
            "managers",
            "managers_pages",
            "managers_by_nationality",
            "managers_status",
            "managers_count"
    }, allEntries = true)
    public void changeStatus(String id, ManagerStatus managerStatus) {
        Optional<Manager> manager = managerRepository.findById(Long.valueOf(id));
        if (manager.isPresent()) {
            Manager managerObj = manager.get();
            managerObj.setStatus(managerStatus);
            managerRepository.save(managerObj);
        }
    }

}