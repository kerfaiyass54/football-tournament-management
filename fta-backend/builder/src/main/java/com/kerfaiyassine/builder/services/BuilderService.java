package com.kerfaiyassine.builder.services;


import com.kerfaiyassine.builder.DTOs.BuilderDTO;
import com.kerfaiyassine.builder.DTOs.ExpertiseStats;
import com.kerfaiyassine.builder.DTOs.YearsMaxMin;
import com.kerfaiyassine.builder.entities.Builder;
import com.kerfaiyassine.builder.enums.Expertise;
import com.kerfaiyassine.builder.repositories.BuilderRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;

@Service
@Slf4j
public class BuilderService {

    private final BuilderRepository builderRepository;

    public BuilderService(BuilderRepository builderRepository) {
        this.builderRepository = builderRepository;
    }

    public BuilderDTO mapToDTO(Builder builder) {
        BuilderDTO dto = new BuilderDTO();
        dto.setId(builder.getId());
        dto.setName(builder.getName());
        dto.setPrice(builder.getPrice());
        dto.setExpertise(builder.getExpertise());
        dto.setNationality(builder.getNationality());
        dto.setYearEstablished(builder.getYearEstablished());
        return dto;
    }

    @CacheEvict(value = {
            "builders",
            "builders_pages",
            "builders_by_nationality",
            "builders_by_expertise",
            "builders_stats",
            "builders_years",
            "builders_nationality"
    }, allEntries = true)
    public BuilderDTO createBuilder(BuilderDTO builderDTO) {
        Builder builder = new Builder();
        builder.setName(builderDTO.getName());
        builder.setExpertise(builderDTO.getExpertise());
        builder.setPrice(builderDTO.getPrice());
        builder.setNationality(builderDTO.getNationality());
        builder.setYearEstablished(builderDTO.getYearEstablished());
        Builder builder1 = builderRepository.save(builder);
        return mapToDTO(builder1);
    }

    @Cacheable(value = "builders", key = "#id")
    public BuilderDTO getBuilderById(Integer id) {
        Optional<Builder> optional = builderRepository.findById(id);
        return optional.map(this::mapToDTO).orElse(null);
    }

    @Cacheable(value = "builders_by_nationality",
            key = "#nationality + '-' + #page + '-' + #size")
    public List<BuilderDTO> getBuilderByNationality(String nationality, int size, int page) {
        Pageable pageable = PageRequest.of(page, size);
        return builderRepository
                .findBuilderByNationality(nationality, pageable)
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    @Cacheable(value = "builders_by_expertise",
            key = "#expertise + '-' + #page + '-' + #size")
    public List<BuilderDTO> getBuilderByExpertise(Expertise expertise, int size, int page) {
        Pageable pageable = PageRequest.of(page, size);
        return builderRepository
                .findBuildersByExpertise(expertise, pageable)
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    @CacheEvict(value = {
            "builders",
            "builders_pages",
            "builders_by_nationality",
            "builders_by_expertise",
            "builders_stats",
            "builders_years",
            "builders_nationality"
    }, allEntries = true)
    public void updateBuilderPrice(Integer id, BigDecimal price) {
        Builder builder = builderRepository.findBuilderById(id);
        builder.setPrice(price);
        builderRepository.save(builder);
    }

    @Cacheable(value = "builders_pages", key = "#page + '-' + #size")
    public Page<BuilderDTO> getAllBuilders(int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return builderRepository.findAll(pageable).map(this::mapToDTO);
    }

    @Cacheable("builders_stats")
    public ExpertiseStats countBuilders(Expertise expertise) {
        int sum = 0;
        List<Builder> builders = builderRepository.findAll();
        for (Builder builder : builders) {
            if (builder.getExpertise().equals(expertise)) {
                sum++;
            }
        }
        return new ExpertiseStats(expertise, sum);
    }

    @Cacheable("builders_years")
    public YearsMaxMin getYoungestAndOldest() {
        List<Integer> years = builderRepository.findAll()
                .stream()
                .map(Builder::getYearEstablished)
                .toList();

        YearsMaxMin result = new YearsMaxMin();

        if (years.isEmpty()) {
            result.setMinYear(0);
            result.setMaxYear(0);
            return result;
        }
        result.setMinYear(Collections.min(years));
        result.setMaxYear(Collections.max(years));
        return result;
    }

    @Cacheable("builders_nationality")
    public String getMostNationality() {
        return builderRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(
                        Builder::getNationality,
                        Collectors.counting()
                ))
                .entrySet()
                .stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse("N/A");
    }


    @CacheEvict(value = {
            "builders",
            "builders_pages",
            "builders_by_nationality",
            "builders_by_expertise",
            "builders_stats",
            "builders_years",
            "builders_nationality"
    }, allEntries = true)
    public void deleteBuilder(Integer id) {
        builderRepository.deleteById(id);
    }









}
