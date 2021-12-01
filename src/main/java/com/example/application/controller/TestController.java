package com.example.application.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.application.model.Candidate;
import com.example.application.model.Question;
import com.example.application.model.TestResponse;
import com.example.application.repository.CandidateRepository;
import com.example.application.repository.QuestionRepository;

import constants.QuestionConstants;
import utility.BuildResponseXmlForTest;
import utility.QuestionModules;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/examPlatform/user/test/")
public class TestController {
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	CandidateRepository candidateRepository;
	
	@Autowired
	QuestionController questionController;
	
	public static String userName = "sk";
	
	List<TestResponse> userResponse = new ArrayList<TestResponse>();
	BuildResponseXmlForTest buildResponseXmlForTest = new BuildResponseXmlForTest();
	
	@GetMapping("start/modules")
	public List<Question> getQuestionsForModules(){
		/*Random random = new Random();
		List<Question> questionListAptitudeModule = new ArrayList<Question>();
		questionListAptitudeModule = questionRepository.findByModule(QuestionModules.APTITUDE.toString());
		HashMap<Integer, Question> selectedQuestionsForAptitudeModule = new HashMap<>();
		List<Question> selectedQuestionsToBeReturned = new ArrayList<Question>();
		int aptitudeQuestionCounter = 0;
		int aptitudeQuestionMaxCounter = questionListAptitudeModule.size();
		if(questionListAptitudeModule.size() < 2) {
			while(aptitudeQuestionCounter != 2 ) {
				int randomGen = random.nextInt(aptitudeQuestionMaxCounter);
				if(!selectedQuestionsForAptitudeModule.containsKey(randomGen)){
					selectedQuestionsForAptitudeModule.put(randomGen, questionListAptitudeModule.get(randomGen));
				}
			}
		}
		selectedQuestionsForAptitudeModule.forEach((Integer, Question) ->{
			selectedQuestionsToBeReturned.add(Question);
		});*/
		List<Question> selectedQuestions = new ArrayList<>();
		selectedQuestions.addAll(getQuestionsForModuleByModuleName(QuestionModules.APTITUDE.toString()));
		selectedQuestions.addAll(getQuestionsForModuleByModuleName(QuestionModules.ENGLISH.toString()));
		return selectedQuestions;
	}
	public List<Question> getQuestionsForModuleByModuleName(String module){
		Random random = new Random();
		List<Question> questionListForModule = new ArrayList<Question>();
		questionListForModule = questionRepository.findByModuleAndIsQuestionActive(module, QuestionConstants.IS_QUESTION_ACTIVE_FLAG_Y);
		
		HashMap<Integer, Question> selectedQuestionsForModule = new HashMap<>();
		List<Question> selectedQuestionsToBeReturned = new ArrayList<Question>();
		
		int questionCounter = 0;
		int questionMaxCounter = questionListForModule.size();
		int noOfQuestionToBeAddForThisModule = 0;
		if(module.equalsIgnoreCase(QuestionModules.APTITUDE.toString())) {
			noOfQuestionToBeAddForThisModule = QuestionConstants.APTITUDE_QUESTION_COUNT;
		}else if(module.equalsIgnoreCase(QuestionModules.ENGLISH.toString())) {
			noOfQuestionToBeAddForThisModule = QuestionConstants.ENGLISH_QUESTION_COUNT;
		}
		if(questionListForModule.size() >= noOfQuestionToBeAddForThisModule) {
			while(questionCounter != noOfQuestionToBeAddForThisModule ) {
				int randomGen = random.nextInt(questionMaxCounter);
				if(!selectedQuestionsForModule.containsKey(randomGen)){
					selectedQuestionsForModule.put(randomGen, questionListForModule.get(randomGen));
					questionCounter++;
				}
			}
		}
		selectedQuestionsForModule.forEach((Integer, Question) ->{
			selectedQuestionsToBeReturned.add(Question);
		});
		return selectedQuestionsToBeReturned;
	}
	
	@PostMapping("/getXml")
	public ResponseEntity<String> saveUserResponse(@RequestBody TestResponse response){
		HttpHeaders responseHeaders = new HttpHeaders();
		userResponse.add(response);
		//buildResponseXmlForTest.createXmlResponseFile(res, "Shivam");
		saveUserTestResponse();
		responseHeaders.set("Request Status:", "Response Saved");
		return new ResponseEntity<String>("Response Saved!", responseHeaders, HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/FinalSubmit")
	public ResponseEntity<String> saveUserTestResponse(){
		Candidate candidate = null;
		candidate = candidateRepository.findByCandidateUserName(userName);
		HttpHeaders responseHeader = new HttpHeaders();
		buildResponseXmlForTest.createXmlResponseFile(userResponse, candidate);
		responseHeader.set("Request Status:", "Test Response Saved");
		return new ResponseEntity<String>("Test Response Saved!", responseHeader, HttpStatus.ACCEPTED);
	}
}
