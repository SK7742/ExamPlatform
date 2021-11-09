import React, { Component } from 'react';
import CandidateRegistrationService from '../service/CandidateRegistrationService';

class RegisterNewCandidateComponent extends Component {
    constructor(props){
          super(props) 
          this.state = {
             candidateFirstName: '',
             candidateLastName: '',
             emailId: '',
             candidateUserName: '',
             candidatePassword: '',
          } 
          this.changeCandidateFirstNameHandler = this.changeCandidateFirstNameHandler.bind(this);
          this.changeCandidateLastNameHandler = this.changeCandidateLastNameHandler.bind(this);
          this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
          this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
          this.changePasswordHandler = this.changePasswordHandler.bind(this);
          this.registerCandidate = this.registerCandidate.bind(this);
        }
        changeCandidateFirstNameHandler= (event) =>{
            this.setState({candidateFirstName: event.target.value});
        }
        changeCandidateLastNameHandler= (event) =>{
            this.setState({candidateLastName: event.target.value});
        }
        changeEmailIdHandler= (event) =>{
            this.setState({emailId: event.target.value});
        }
        changeUsernameHandler= (event) =>{
            this.setState({candidateUserName: event.target.value});
        }
        changePasswordHandler= (event) =>{
            this.setState({candidatePassword: event.target.value});
        }
        cancel(){
            this.props.history.push('/..');
        }
        registerCandidate = (e) =>{
            e.preventDefault();
            let candidate = {candidateFirstName: this.state.candidateFirstName, candidateLastName: this.state.candidateLastName, 
                emailId: this.state.emailId, candidateUserName: this.state.candidateUserName, candidatePassword: this.state.candidatePassword};
            console.log('candidateInsertQuery => ' + JSON.stringify(candidate));
            CandidateRegistrationService.registerNewCandidate(candidate).then(res => {
                alert("User Registered SucessFully\nRedirecting to login Page")
                this.props.history.push('/..');
            });
          }

        
    render() {
        return (
            <div>
               <div className = "container">
                   <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Candidate SignUp</h3>
                            <div className ="card-body">
                                <form>
                                    <div className ="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" className="form-control" required
                                            value={this.state.candidateFirstName} onChange={this.changeCandidateFirstNameHandler}/>
                                    </div>
                                    <div className ="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" className="form-control" required
                                            value={this.state.candidateLastName} onChange={this.changeCandidateLastNameHandler}/>
                                    </div>
                                    <div className ="form-group">
                                        <label>Email Address</label>
                                        <input placeholder="Email Address" className="form-control" type="email" required
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <div className ="form-group">
                                        <label>Username</label>
                                        <input placeholder="username" className="form-control" required
                                            value={this.state.candidateUserName} onChange={this.changeUsernameHandler}/>
                                    </div>
                                    <div className ="form-group password">
                                        <label>Password</label>
                                        <input placeholder="password" className="form-control" type="password" required
                                            value={this.state.candidatePassword} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <p></p>
                                    <button className="btn btn-success" onClick={this.registerCandidate}>Register</button>
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

export default RegisterNewCandidateComponent;