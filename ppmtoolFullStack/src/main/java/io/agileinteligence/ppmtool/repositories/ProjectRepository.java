package io.agileinteligence.ppmtool.repositories;

import io.agileinteligence.ppmtool.domain.project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<project, Long> {
	
	project findByProjectIdentifier(String ProectId);
	
	@Override
	Iterable<project> findAll();
}
