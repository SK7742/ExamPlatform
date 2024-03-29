package com.example.application.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
				question.setIsQuestionActive('Y');
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
						&& question.getOptionD().equals(temp.getOptionD())
						&& question.getAnswer()==temp.getAnswer()
						)
					return true;
			}

		}
		return false;
	}
	
	@PutMapping("/updateQuestion/{id}")
	public ResponseEntity<Question> updateQuestionByQuestionId(@PathVariable Long id, @RequestBody Question questionFromScreen){
		Question question = questionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Question Not Exist!"));
		question.setIsQuestionActive(questionFromScreen.getIsQuestionActive());
		question.setQuestion(questionFromScreen.getQuestion());
		question.setAnswer(questionFromScreen.getAnswer());
		question.setModule(questionFromScreen.getModule());
		question.setOptionA(questionFromScreen.getOptionA());
		question.setOptionB(questionFromScreen.getOptionB());
		question.setOptionC(questionFromScreen.getOptionC());
		question.setOptionD(questionFromScreen.getOptionD());
		Question updatedQuestion = questionRepository.save(question);
		return ResponseEntity.ok(updatedQuestion);
		
		
	}
	@GetMapping("/getAllQuestions")
	public List<Question> getAllQuestionList(){
		return questionRepository.findAll();
	}
	
	@DeleteMapping("/deleteQuestion/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteQuestion(@PathVariable Long id){
		Question question = questionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Question Not Exist!"));
		questionRepository.delete(question);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
