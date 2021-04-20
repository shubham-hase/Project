package com.example.springbackend_h2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbackend_h2.model.Student;



//Here We make Interface which extends JPARepository
@Repository
public interface StudentRepository extends JpaRepository<Student,Long>{

}
