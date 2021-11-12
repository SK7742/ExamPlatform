package com.example.application.repository;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.application.model.Question;

@Repository
@Configuration
@EnableJpaRepositories
public interface QuestionRepository extends JpaRepository<Question, Long>{
	List<Question> findByQuestion(String question);
	
	long count();
	//long QuestionId(Long question_id);
	/*
	@Query(value = constants.QuestionConstants.QUERY_MIN_COUNT_QUESTION_MODULE)
	int MinQuestionFromModule(String module);
	
	@Query(value = constants.QuestionConstants.QUERY_MAX_COUNT_QUESTION_MODULE)
	int MaxQuestionFromModule(String module);
	
	@Query(value = constants.QuestionConstants.QUERY_GET_QUESTION_BY_ID)
	Question findByQuestionId(Long questionId);*/
}
