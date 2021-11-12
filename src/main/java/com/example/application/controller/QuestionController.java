package com.example.application.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.application.exception.ResourceNotFoundException;
import com.example.application.model.Question;
import com.example.application.repository.QuestionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/examPlatform/section/admin/")
public class QuestionController {
	@Autowired
	QuestionRepository questionRepository;
	
	@PostMapping("/addQuestion")
	public ResponseEntity<String> addNewQuestion(@RequestBody Question question) {
		HttpHeaders responseHeaders = new HttpHeaders();
		if(question != null) {
			boolean isExistingQuestion;
			isExistingQuestion = isQuestionAlreadyExisting(question);
			if(!isExistingQuestion) {
				questionRepository.save(question);
				responseHeaders.set("Request Status:", "Question Saved");
				return new ResponseEntity<String>("Question Saved!", responseHeaders, HttpStatus.ACCEPTED);
			}
		}
		responseHeaders.set("Request Status:", "Question Already Exists!");
		return new ResponseEntity<String>("Question Already Exists", responseHeaders, HttpStatus.CONFLICT);
	}
	
	@GetMapping("getQuestion/{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable Long id){
		Question question = questionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Question Not Exist!"));
		return ResponseEntity.ok(question);
	}

	private boolean isQuestionAlreadyExisting(Question question) {
		List<Question> fecthQuestion = new ArrayList();
		fecthQuestion = questionRepository.findByQuestion(question.getQuestion());
		if(fecthQuestion != null && !fecthQuestion.isEmpty()) {
			for(Question temp : fecthQuestion) {
				if(question.getOptionA().equals(temp.getOptionA())
						&& question.getOptionB().equals(temp.getOptionB())
						&& question.getOptionC().equals(temp.getOptionC())
						&& question.getOptionD().equals(temp.getOptionD()))
					return true;
			}

		}
		return false;
	}

	
	
	
}
