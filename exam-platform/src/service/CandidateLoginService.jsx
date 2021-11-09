import axios from 'axios';

const CANDIDATE_REGISTRATION_API_BASE_URL = "http://localhost:8080/examPlatform/candidate/Login";

class CandidateLoginService{

    getCandidate(Candidate){
        return axios.get(CANDIDATE_REGISTRATION_API_BASE_URL + '/' + Candidate);
    }

}
export default new CandidateLoginService()