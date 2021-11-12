package com.example.application.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.application.model.Candidate;
import com.example.application.model.Question;
import com.example.application.model.TestResponse;
import com.example.application.repository.CandidateRepository;
import com.example.application.repository.QuestionRepository;

import utility.QuestionModules;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/examPlatform/user/test/")
public class TestController {
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	CandidateRepository candidateRepository;
	public Question generateQuestionId(Question question, TestResponse response) {
		//int getMinQuestionId = questionRepository.MinQuestionFromModule(question.getModule());
		//int getMaxQuestionId = questionRepository.MaxQuestionFromModule(question.getModule());
		Random random = new Random();
		int generatedQuetionId = 1;//random.nextInt(getMaxQuestionId-getMinQuestionId) + getMinQuestionId;
		boolean isQuestionValid = validateGeneratedQuestionId(generatedQuetionId, question);
		if(!isQuestionValid) {
			generateQuestionId(question, response);
		}
		
		if(response.getResponse().get(generatedQuetionId) != null) {
			return question;
		}
		return generateQuestionId(question, response);
	}
	
	private boolean validateGeneratedQuestionId(int generatedQuetionId, Question question) {
		Question TempQuestion = new Question();
		TempQuestion.setQuestionId((long) generatedQuetionId);
		//TempQuestion =  questionRepository.findByQuestionId(question.getQuestionId());
			if(TempQuestion.getModule().equals(question.getModule())) {
				
				return true;
			}
			return false;
	}
	
	@GetMapping("starts/{userId}")
	private void testStarts(@PathVariable String userId) {
		TestResponse response = new TestResponse();
		Candidate candidate = null;
		candidate = candidateRepository.findByCandidateUserName(userId);
		if(candidate != null)
			response.setCandidate(candidate);
			
		//10 Questions for Aptitude
		for(int i = 0; i<10; i++) {
			Question question = new Question();
			question.setModule(QuestionModules.APTITUDE.toString());
			question = generateQuestionId(question, response);
			
		}
	}
}
