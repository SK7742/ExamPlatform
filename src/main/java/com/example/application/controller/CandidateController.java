package com.example.application.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.application.exception.ResourceNotFoundException;
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
	@GetMapping("/getCandidateWithCred/{id}")
	public ResponseEntity<Candidate> getCandidateByDetails(@PathVariable String id) {
		Candidate candidate = new Candidate();
		String[] split = id.split("~P~A~S~S~");
		if(split.length == 2) {
			candidate.setCandidateUserName(split[0]);
			candidate.setCandidatePassword(split[1]);
			candidate = candidateRepository.findByCandidateUserNameAndCandidatePassword(candidate.getCandidateUserName(), candidate.getCandidatePassword());
			if(candidate.getCandidateId() != null)
				return ResponseEntity.ok(candidate);
		}
		return (ResponseEntity<Candidate>) ResponseEntity.notFound();
		//return candidateRepository.findUserByCandidateUserNameAndCandidatePassword(candidate.getCandidateUserName(), candidate.getCandidatePassword());
	}
}
