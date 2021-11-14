
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterNewCandidateComponent from './component/RegisterNewCandidateComponent';
import LoginComponent from './component/LoginComponent';
import AddOrEditQuestion from './component/AddOrEditQuestion';
import viewQuesionPage from './component/viewQuesionPage';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
          <switch> 
          <Route path = "/candidateRegister" component = {RegisterNewCandidateComponent}></Route>
          <Route path = "/login" component = {LoginComponent}></Route>
          <Route path = "/user/type/admin/addQuestion" component = {AddOrEditQuestion}></Route>
          <Route path = "/user/type/admin/updateQuestion/:id" component = {AddOrEditQuestion}></Route>
          <Route path = "/user/type/admin/showAllQuestion" component = {viewQuesionPage}></Route>
          </switch>
        </div>
        <footerComponent />
      </Router>
    </div>
  );
}

export default App;
