import axios from 'axios';

const ADDING_QUESTION_API_BASE_URL = "http://localhost:8080/examPlatform/candidate/newCandidateRegistration";
class QuestionService{
    addNewQuestion(question){
        return axios.post(ADDING_QUESTION_API_BASE_URL, question);
    }
}
export default new QuestionService()