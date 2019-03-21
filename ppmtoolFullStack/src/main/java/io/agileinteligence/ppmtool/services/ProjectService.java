package io.agileinteligence.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import io.agileinteligence.ppmtool.domain.project;
import io.agileinteligence.ppmtool.exceptions.ProjectIdException;
import io.agileinteligence.ppmtool.repositories.ProjectRepository;

@Service 
public class ProjectService {

	@Autowired 
	private ProjectRepository ProjectRepository;

	public project saveOrUpdateProject(project project) {
		
		try {
			project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
			return ProjectRepository.save(project);
		}catch (Exception e) {
			throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists");
		}
		
	}
}
