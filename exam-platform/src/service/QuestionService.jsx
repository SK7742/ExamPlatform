import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080//examPlatform/section/admin/";
const ADDING_QUESTION_API_BASE_URL = "http://localhost:8080//examPlatform/section/admin/addQuestion";
const QUESTION_LIST_API_BASE_URL = "http://localhost:8080/examPlatform/section/admin/getAllQuestions";
const QUESTION_BY_ID_API_BASE_URL = "http://localhost:8080/examPlatform/section/admin/getQuestion";
const UPDATE_QUESTION_BY_ID_API_BASE_URL = "http://localhost:8080/examPlatform/section/admin/updateQuestion";
const GET_QUESTIONS_LIST_FOR_TEST_URL = "http://localhost:8080/examPlatform/user/test/start/modules";
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
    deleteQuestion(id){
        return axios.delete(ADMIN_API_BASE_URL + '/deleteQuestion/' + id);
    }
    prepareQuestionListForExam(){
        return axios.get(GET_QUESTIONS_LIST_FOR_TEST_URL);
    }
}
export default new QuestionService()