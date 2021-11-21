package com.example.application.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "candidates")
public class Candidate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JoinColumn(name = "candidate_id")
	private Long candidateId;
	
	@Column(name = "candidate_first_name")
	private String candidateFirstName;
	
	
	private String candidateLastName;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "username")
	private String candidateUserName;
	
	@Column(name = "password")
	private String candidatePassword;
	
	@Column(name = "registered_on")
	private Date candidateRegisterDate;
	
	@Column(name = "last_active_time")
	private Date lastLoginTime;
	
	

	public Candidate() {}



	public Candidate(String candidateFirstName, String candidateLastName, String emailId, String candidateUserName,
			String candidatePassword, Date candidateRegisterDate, Date lastLoginTime) {
		super();
		this.candidateFirstName = candidateFirstName;
		this.candidateLastName = candidateLastName;
		this.emailId = emailId;
		this.candidateUserName = candidateUserName;
		this.candidatePassword = candidatePassword;
		this.candidateRegisterDate = candidateRegisterDate;
		this.lastLoginTime = lastLoginTime;
	}



	public Long getCandidateId() {
		return candidateId;
	}



	public void setCandidateId(Long candidateId) {
		this.candidateId = candidateId;
	}



	public String getCandidateFirstName() {
		return candidateFirstName;
	}



	public void setCandidateFirstName(String candidateFirstName) {
		this.candidateFirstName = candidateFirstName;
	}



	public String getCandidateLastName() {
		return candidateLastName;
	}



	public void setCandidateLastName(String candidateLastName) {
		this.candidateLastName = candidateLastName;
	}



	public String getEmailId() {
		return emailId;
	}



	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}



	public String getCandidateUserName() {
		return candidateUserName;
	}



	public void setCandidateUserName(String candidateUserName) {
		this.candidateUserName = candidateUserName;
	}



	public String getCandidatePassword() {
		return candidatePassword;
	}



	public void setCandidatePassword(String candidatePassword) {
		this.candidatePassword = candidatePassword;
	}



	public Date getCandidateRegisterDate() {
		return candidateRegisterDate;
	}



	public void setCandidateRegisterDate(Date candidateRegisterDate) {
		this.candidateRegisterDate = candidateRegisterDate;
	}



	public Date getLastLoginTime() {
		return lastLoginTime;
	}



	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	
}
