import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterNewCandidateComponent from './component/RegisterNewCandidateComponent';
import LoginComponent from './component/LoginComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
          <switch> 
          <Route path = "/candidateRegister" component = {RegisterNewCandidateComponent}></Route>
          <Route path = "/login" component = {LoginComponent}></Route>
          </switch>
        </div>
        <footerComponent />
      </Router>
    </div>
  );
}

export default App;
