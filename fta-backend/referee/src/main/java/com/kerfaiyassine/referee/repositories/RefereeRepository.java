package com.kerfaiyassine.referee.repositories;

import aj.org.objectweb.asm.commons.Remapper;
import com.kerfaiyassine.referee.entities.Referee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RefereeRepository extends CrudRepository<Referee, Integer> {

    public Referee findRefereeByName(String name);

    Page<Referee> findAll(Pageable pageable);
}
