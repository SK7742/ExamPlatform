import React, { Component } from 'react';
import CandidateLoginService from '../service/CandidateLoginService';

class LoginComponent extends Component {
    constructor(props){
        super(props) 
        this.state = {
           candidateUserName: '',
           candidatePassword: '',
        } 
        this.changeCandidateUserNameHandler = this.changeCandidateUserNameHandler.bind(this);
        this.changecandidatePasswordHandler = this.changecandidatePasswordHandler.bind(this);
      }
      componentDidMount(){
        CandidateLoginService.getCandidate(this.state.candidateUserName, this.state.candidatePassword).then( (res) => {
            let candidateLoginCred = res.data;
            this.setState({candidateUserName: candidateLoginCred.candidateUserName,
                candidatePassword: candidateLoginCred.candidatePassword
            });
        });
    }
        changeCandidateUserNameHandler= (event) =>{
            this.setState({candidateUserName: event.target.value});
        }
        changecandidatePasswordHandler= (event) =>{
            this.setState({candidatePassword: event.target.value});
        }
        cancel(){
            this.props.history.push('/..');
        }
        validateLoginCredentials = (e) =>{
            e.preventDefault();
            let candidateLoginCred = {candidateUserName: this.state.candidateUserName, candidatePassword: this.state.candidatePassword};
            console.log('candidateFetchQuery => ' + JSON.stringify(candidateLoginCred));
            CandidateLoginService.getCandidate(candidateLoginCred).then(res => {
                alert("Login Sucess!")
                this.props.history.push('../');
            });
          }
    render() {
        return (
            <div>
            <div className = "container">
                <div className = "row">
                     <div className = "card col-md-6 offset-md-3 offset-md-3">
                         <h3 className="text-center">Candidate Login</h3>
                         <div className ="card-body">
                             <form>
                                 <div className ="form-group">
                                     <label>UserName</label>
                                     <input placeholder="UserName" className="form-control" required
                                         value={this.state.candidateUserName} onChange={this.changeCandidateUserNameHandler}/>
                                 </div>
                                 <div className ="form-group">
                                     <label>PassWord</label>
                                     <input placeholder="PassWord" className="form-control" required
                                         value={this.state.candidatePassword} onChange={this.changecandidatePasswordHandler}/>
                                 </div>
                                 <p></p>
                                 <button className="btn btn-success" onClick={this.validateLoginCredentials}>Login</button>
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                             </form>
                         </div>
                     </div>
                </div>
            </div>
         </div>
        );
    }
}

export default LoginComponent;