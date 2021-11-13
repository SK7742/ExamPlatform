package com.example.application.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Question")
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="questionId", nullable=false)
	private Long questionId;
	
	@Column(name="question", nullable=false, length=512)
	private String question;
	
	@Column(name="optionA", nullable=false, length=100)
	private String optionA;
	
	@Column(name="optionB", nullable=false, length=100)
	private String optionB;
	
	@Column(name="optionC", nullable=false, length=100)
	private String optionC;
	
	@Column(name="optionD", nullable=false, length=100)
	private String optionD;;
	
	@Column(name="isQuestionActive", nullable=false, length=1)
	private char isQuestionActive;
	
	@Column(name="module", nullable=false, length=10)
	private String module;
	
	@Column(name="answer", nullable=false, length=1)
	private char answer;

	public Question() {
		super();
	}

	public Question(String question, String optionA, String optionB, String optionC, String optionD,
			char isQuestionActive, String module, char answer) {
		super();
		this.question = question;
		this.optionA = optionA;
		this.optionB = optionB;
		this.optionC = optionC;
		this.optionD = optionD;
		this.isQuestionActive = isQuestionActive;
		this.module = module;
		this.answer = answer;
	}

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
	
}
