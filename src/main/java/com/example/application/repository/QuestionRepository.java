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
	List<Question> findByModuleAndIsQuestionActive(String module, char isQuestionActive);
}
