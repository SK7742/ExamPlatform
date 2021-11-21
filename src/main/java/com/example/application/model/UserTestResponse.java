package com.example.application.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "userTestResponses")
public class UserTestResponse {
	@Id
	@Column(name = "responseId")
	private String responseId;
	
	@Lob
	@Column(name = "response" )
	private String response;
	
	@Column
	private double marksObtained;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Candidate candidate;
	

	public UserTestResponse(String response, double marksObtained, Candidate candidate) {
		super();
		this.response = response;
		this.marksObtained = marksObtained;
		this.candidate = candidate;
	}

	public Candidate getCandidate() {
		return candidate;
	}

	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}

	public String getResponseId() {
		return responseId;
	}

	public void setResponseId(String responseId) {
		this.responseId = responseId;
	}


	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public double getMarksObtained() {
		return marksObtained;
	}

	public void setMarksObtained(double marksObtained) {
		this.marksObtained = marksObtained;
	}


	public UserTestResponse() {
		super();
	}
	
	
	

}
