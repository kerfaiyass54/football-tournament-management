package com.kerfaiyassine.builder.repositories;

import com.kerfaiyassine.builder.entities.Builder;
import com.kerfaiyassine.builder.enums.Expertise;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BuilderRepository extends JpaRepository<Builder, Integer> {

    public Builder findBuilderById(Integer id);

    public Page<Builder>  findBuilderByNationality(String nationality, Pageable pageable);

    public Page<Builder> findBuildersByExpertise(Expertise expertise,  Pageable pageable);

    public Page<Builder> findAll(Pageable pageable);

}
