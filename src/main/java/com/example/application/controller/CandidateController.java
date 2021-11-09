package com.example.application.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.application.model.Candidate;
import com.example.application.repository.CandidateRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/examPlatform/candidate/")
public class CandidateController {
	@Autowired
	CandidateRepository candidateRepository;
	
	@GetMapping("/getCandidateList")
	public List<Candidate> getAllCandidates(){
		return candidateRepository.findAll();
	}
	
	@PostMapping("/newCandidateRegistration")
	public Candidate registerNewCandidate(@RequestBody Candidate candidate) {
		Date currentDate = new Date();
		candidate.setCandidateRegisterDate(currentDate);
		candidate.setLastLoginTime(currentDate);
		return candidateRepository.save(candidate);
	}
	@GetMapping("/getCandidateInfoByCandidateDetails")
	public org.apache.tomcat.jni.Status getCandidateByUserNameAndPassWord(@RequestBody Candidate candidate) {
		List<Candidate> tempCandidate = null;
		tempCandidate = candidateRepository.findUserByCandidateUserNameAndCandidatePassword(candidate.getCandidateUserName(), candidate.getCandidatePassword());
		if(tempCandidate != null && !tempCandidate.isEmpty()) {
			//return Status.SUCCESS;
		}
		//return ResponseEntity.notFound();
		return null;
			
		
	}

}
