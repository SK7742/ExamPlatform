import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RegisterNewCandidateComponent from './component/RegisterNewCandidateComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
          <switch> 
          <Route path = "/candidateRegister" component = {RegisterNewCandidateComponent}></Route>
          </switch>
        </div>
        <footerComponent />
      </Router>
    </div>
  );
}

export default App;
