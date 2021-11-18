import axios from 'axios';

const ADDING_QUESTION_API_BASE_URL = "http://localhost:8080//examPlatform/section/admin/addQuestion";
const QUESTION_LIST_API_BASE_URL = "http://localhost:8080/examPlatform/section/admin/getAllQuestions";
const QUESTION_BY_ID_API_BASE_URL = "http://localhost:8080/examPlatform/section/admin/getQuestion";
const UPDATE_QUESTION_BY_ID_API_BASE_URL = "http://localhost:8080/examPlatform/section/admin/updateQuestion";
class QuestionService{
    addNewQuestion(question){
       return axios.post(ADDING_QUESTION_API_BASE_URL, question);
    }
    getQuestionsList(){
        return axios.get(QUESTION_LIST_API_BASE_URL);
    }
    getQuestionById(id){
        return axios.get(QUESTION_BY_ID_API_BASE_URL + '/' + id);
    }
    updateQuestion(question, questionId){
        return axios.put(UPDATE_QUESTION_BY_ID_API_BASE_URL + '/' + questionId, question);
    }
}
export default new QuestionService()