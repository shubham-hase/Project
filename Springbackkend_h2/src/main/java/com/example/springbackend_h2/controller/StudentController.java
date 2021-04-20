package com.example.springbackend_h2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbackend_h2.model.Student;
import com.example.springbackend_h2.repository.StudentRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
//creating a get mapping that retrieves all the students detail from the database   
@RequestMapping("/api/")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@GetMapping("/students")
	public List<Student> getAllStudent(){
		return studentRepository.findAll();
		
	}

}
