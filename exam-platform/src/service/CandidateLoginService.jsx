import axios from 'axios';

const CANDIDATE_REGISTRATION_API_BASE_URL = "http://localhost:8080/examPlatform/candidate/getCandidateWithCred";

class CandidateLoginService{

    getCandidate(candidateUserName, candidatePassword){
        return axios.get(CANDIDATE_REGISTRATION_API_BASE_URL + '/' + candidateUserName + '~P~A~S~S~' + candidatePassword);
    }

}
export default new CandidateLoginService()