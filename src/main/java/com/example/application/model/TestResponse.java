package com.example.application.model;

import java.util.HashMap;

import javax.persistence.Column;

public class TestResponse {

	private Long questionId;
	private String question;
	private String optionA;
	private String optionB;
	private String optionC;
	private String optionD;;
	private char isQuestionActive;
	private String module;
	private char answer;
	private char userResponse;
	public Long getQuestionId() {
		return questionId;
	}
	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getOptionA() {
		return optionA;
	}
	public void setOptionA(String optionA) {
		this.optionA = optionA;
	}
	public String getOptionB() {
		return optionB;
	}
	public void setOptionB(String optionB) {
		this.optionB = optionB;
	}
	public String getOptionC() {
		return optionC;
	}
	public void setOptionC(String optionC) {
		this.optionC = optionC;
	}
	public String getOptionD() {
		return optionD;
	}
	public void setOptionD(String optionD) {
		this.optionD = optionD;
	}
	public char getIsQuestionActive() {
		return isQuestionActive;
	}
	public void setIsQuestionActive(char isQuestionActive) {
		this.isQuestionActive = isQuestionActive;
	}
	public String getModule() {
		return module;
	}
	public void setModule(String module) {
		this.module = module;
	}
	public char getAnswer() {
		return answer;
	}
	public void setAnswer(char answer) {
		this.answer = answer;
	}
	public char getUserResponse() {
		return userResponse;
	}
	public void setUserResponse(char userResponse) {
		this.userResponse = userResponse;
	}
	public TestResponse() {
		super();
	}
	public TestResponse(Long questionId, String question, String optionA, String optionB, String optionC,
			String optionD, char isQuestionActive, String module, char answer, char userResponse) {
		super();
		this.questionId = questionId;
		this.question = question;
		this.optionA = optionA;
		this.optionB = optionB;
		this.optionC = optionC;
		this.optionD = optionD;
		this.isQuestionActive = isQuestionActive;
		this.module = module;
		this.answer = answer;
		this.userResponse = userResponse;
	}

	
}
