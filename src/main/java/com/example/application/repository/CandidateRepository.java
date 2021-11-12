package com.example.application.repository;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.application.model.Candidate;

@Repository
@Configuration
@EnableJpaRepositories
public interface CandidateRepository extends JpaRepository<Candidate, Long>{
	Candidate findByCandidateUserNameAndCandidatePassword(String candidateUserName, String candidatePassword);

	Candidate findByCandidateUserName(String userId);
}
