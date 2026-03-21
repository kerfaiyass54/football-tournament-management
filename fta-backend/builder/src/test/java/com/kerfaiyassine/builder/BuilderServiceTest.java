package com.kerfaiyassine.builder;

import com.kerfaiyassine.builder.DTOs.BuilderDTO;
import com.kerfaiyassine.builder.DTOs.ExpertiseStats;
import com.kerfaiyassine.builder.DTOs.YearsMaxMin;
import com.kerfaiyassine.builder.entities.Builder;
import com.kerfaiyassine.builder.enums.Expertise;
import com.kerfaiyassine.builder.repositories.BuilderRepository;
import com.kerfaiyassine.builder.services.BuilderService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import org.springframework.data.domain.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BuilderServiceTest {

    @Mock
    private BuilderRepository builderRepository;

    @InjectMocks
    private BuilderService builderService;

    private Builder builder;

    @BeforeEach
    void setUp() {
        builder = new Builder();
        builder.setId(1);
        builder.setName("John Builder");
        builder.setNationality("French");
        builder.setExpertise(Expertise.SAFETY);
        builder.setYearEstablished(2000);
        builder.setPrice(BigDecimal.valueOf(1000));
    }

    // ================= CREATE =================

    @Test
    void createBuilder_shouldReturnDto() {
        when(builderRepository.save(any(Builder.class))).thenReturn(builder);

        BuilderDTO dto = new BuilderDTO();
        dto.setName("John Builder");
        dto.setNationality("French");
        dto.setExpertise(Expertise.SAFETY);
        dto.setYearEstablished(2000);
        dto.setPrice(BigDecimal.valueOf(1000));

        BuilderDTO result = builderService.createBuilder(dto);

        assertNotNull(result);
        assertEquals("John Builder", result.getName());
        verify(builderRepository).save(any(Builder.class));
    }

    // ================= GET BY ID =================

    @Test
    void getBuilderById_shouldReturnDto() {
        when(builderRepository.findById(1)).thenReturn(Optional.of(builder));

        BuilderDTO result = builderService.getBuilderById(1);

        assertNotNull(result);
        assertEquals("French", result.getNationality());
    }

    @Test
    void getBuilderById_shouldReturnNullIfNotFound() {
        when(builderRepository.findById(99)).thenReturn(Optional.empty());

        BuilderDTO result = builderService.getBuilderById(99);

        assertNull(result);
    }

    // ================= GET BY NATIONALITY =================

    @Test
    void getBuilderByNationality_shouldReturnList() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Builder> page = new PageImpl<>(List.of(builder));

        when(builderRepository.findBuilderByNationality("French", pageable))
                .thenReturn(page);

        List<BuilderDTO> result =
                builderService.getBuilderByNationality("French", 10, 0);

        assertEquals(1, result.size());
        assertEquals("French", result.get(0).getNationality());
    }

    // ================= GET BY EXPERTISE =================

    @Test
    void getBuilderByExpertise_shouldReturnList() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Builder> page = new PageImpl<>(List.of(builder));

        when(builderRepository.findBuildersByExpertise(Expertise.SAFETY, pageable))
                .thenReturn(page);

        List<BuilderDTO> result =
                builderService.getBuilderByExpertise(Expertise.SAFETY, 10, 0);

        assertEquals(1, result.size());
    }

    // ================= UPDATE PRICE =================

    @Test
    void updateBuilderPrice_shouldUpdateAndSave() {
        when(builderRepository.findBuilderById(1)).thenReturn(builder);

        builderService.updateBuilderPrice(1, BigDecimal.valueOf(2000));

        assertEquals(BigDecimal.valueOf(2000), builder.getPrice());
        verify(builderRepository).save(builder);
    }

    // ================= GET ALL (PAGE) =================

    @Test
    void getAllBuilders_shouldReturnPage() {
        Pageable pageable = PageRequest.of(0, 10);
        Page<Builder> page = new PageImpl<>(List.of(builder));

        when(builderRepository.findAll(pageable)).thenReturn(page);

        Page<BuilderDTO> result =
                builderService.getAllBuilders(0, 10);

        assertEquals(1, result.getTotalElements());
    }

    // ================= COUNT BUILDERS =================

    @Test
    void countBuilders_shouldReturnCorrectCount() {
        Builder builder2 = new Builder();
        builder2.setExpertise(Expertise.SAFETY);

        when(builderRepository.findAll())
                .thenReturn(List.of(builder, builder2));

        ExpertiseStats stats =
                builderService.countBuilders(Expertise.SAFETY);

        assertEquals(2, stats.getNumberOfBuilders());
    }

    // ================= YEARS MAX MIN =================

    @Test
    void getYoungestAndOldest_shouldReturnCorrectYears() {
        Builder builder2 = new Builder();
        builder2.setYearEstablished(1990);

        when(builderRepository.findAll())
                .thenReturn(List.of(builder, builder2));

        YearsMaxMin result =
                builderService.getYoungestAndOldest();

        assertEquals(1990, result.getMinYear());
        assertEquals(2000, result.getMaxYear());
    }

    @Test
    void getYoungestAndOldest_shouldReturnZeroWhenEmpty() {
        when(builderRepository.findAll()).thenReturn(List.of());

        YearsMaxMin result =
                builderService.getYoungestAndOldest();

        assertEquals(0, result.getMinYear());
        assertEquals(0, result.getMaxYear());
    }

    // ================= MOST NATIONALITY =================

    @Test
    void getMostNationality_shouldReturnCorrectValue() {
        Builder builder2 = new Builder();
        builder2.setNationality("French");

        Builder builder3 = new Builder();
        builder3.setNationality("German");

        when(builderRepository.findAll())
                .thenReturn(List.of(builder, builder2, builder3));

        String result = builderService.getMostNationality();

        assertEquals("French", result);
    }

    // ================= DELETE =================

    @Test
    void deleteBuilder_shouldDeleteIfExists() {
        when(builderRepository.findById(1))
                .thenReturn(Optional.of(builder));

        builderService.deleteBuilder(1);

        verify(builderRepository).deleteById(1);
    }

    @Test
    void deleteBuilder_shouldDoNothingIfNotExists() {
        when(builderRepository.findById(99))
                .thenReturn(Optional.empty());

        builderService.deleteBuilder(99);

        verify(builderRepository, never()).deleteById(any());
    }
}