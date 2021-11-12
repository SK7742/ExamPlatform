package com.example.application.model;

import java.util.HashMap;

public class TestResponse {
	public static HashMap<Long, Long> response;
	public Candidate candidate;
	public static HashMap<Long, Long> getResponse() {
		return response;
	}
	public static void setResponse(HashMap<Long, Long> response) {
		TestResponse.response = response;
	}
	public Candidate getCandidate() {
		return candidate;
	}
	public void setCandidate(Candidate candidate) {
		this.candidate = candidate;
	}
	
}
