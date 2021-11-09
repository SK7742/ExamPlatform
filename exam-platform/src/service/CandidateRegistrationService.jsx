import axios from 'axios';

const CANDIDATE_REGISTRATION_API_BASE_URL = "http://localhost:8080/examPlatform/candidate/newCandidateRegistration";

class CandidateRegistrationService{
    registerNewCandidate(candidate){
        return axios.post(CANDIDATE_REGISTRATION_API_BASE_URL, candidate);
    }
}
export default new CandidateRegistrationService()