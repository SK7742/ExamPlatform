package com.example.application.model;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;

public class QuestionGenerator {
	
	public Question question;
	public Long QuestionId;
	public QuestionGenerator() {
		super();
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public Long getQuestionId() {
		return QuestionId;
	}
	public void setQuestionId(Long questionId) {
		QuestionId = questionId;
	}
	
}
