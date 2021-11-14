import axios from 'axios';

const ADDING_QUESTION_API_BASE_URL = "http://localhost:8080//examPlatform/section/admin/addQuestion";
const QUESTION_LIST_API_BASE_URL = "http://localhost:8080//examPlatform/section/admin/getAllQuestions";
const QUESTION_BY_ID_API_BASE_URL = "http://localhost:8080//examPlatform/section/admin/getAllQuestions";
class QuestionService{
    addNewQuestion(question){
       return axios.post(ADDING_QUESTION_API_BASE_URL, question);
    }
    getQuestionsList(){
        return axios.get(QUESTION_LIST_API_BASE_URL);
    }
    getQuestionById(id){
        return axios.get(QUESTION_BY_ID_API_BASE_URL, id);
    }
}
export default new QuestionService()