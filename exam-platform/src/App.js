
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterNewCandidateComponent from './component/RegisterNewCandidateComponent';
import LoginComponent from './component/LoginComponent';
import AddQuestion from './component/AddQuestion';
import UpdateQuestion from './component/UpdateQuestion';
import viewQuesionPage from './component/viewQuesionPage';
import FooterComponent from './component/FooterComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        
        <div className = "container">
          <switch> 
          <Route path = "/candidateRegister" component = {RegisterNewCandidateComponent}></Route>
          <Route path = "/login" component = {LoginComponent}></Route>
          <Route path = "/user/type/admin/addQuestion" component = {AddQuestion}></Route>
          <Route path = "/user/type/admin/updateQuestion/:id" component = {UpdateQuestion}></Route>
          <Route path = "/user/type/admin/showAllQuestion" component = {viewQuesionPage}></Route>
          </switch>
        </div>
      </Router>
      <FooterComponent />
    </div>  );
}

export default App;
