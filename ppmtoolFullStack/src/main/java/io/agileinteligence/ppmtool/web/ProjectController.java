package io.agileinteligence.ppmtool.web;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.agileinteligence.ppmtool.domain.project;
import io.agileinteligence.ppmtool.services.MapValidationErrorService;
import io.agileinteligence.ppmtool.services.ProjectService;

@RestController 
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;
	
	@PostMapping("")
	public ResponseEntity<?> createNewProject(@Valid @RequestBody project project, BindingResult result){
	
		// refactored by added Map Service
        // return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
		
		 ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
		 if(errorMap!=null) return errorMap;
		 
		project project1 = projectService.saveOrUpdateProject(project);
		return new ResponseEntity<project>(project1, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/{projectId}")
	public ResponseEntity<?> getProjectById(@PathVariable String projectId){
		project project = projectService.findProjectByIdentifier(projectId);
		return new ResponseEntity<project>(project, HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public Iterable<project> getAllProjects(){return projectService.findAllProjects();}
	
	@DeleteMapping("/{projectId}")
	public ResponseEntity<?> deleteProject(@PathVariable String projectId){
		projectService.deleteProjectByIdentifier(projectId);
		
		return new ResponseEntity<String>("Project with ID : '"+projectId+"' was deleted", HttpStatus.OK);
	}
}
