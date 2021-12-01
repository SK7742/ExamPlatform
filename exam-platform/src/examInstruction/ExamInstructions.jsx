import React, { Component } from 'react';
import "./ExamInstruction.css";
class ExamInstructions extends Component {
    constructor(props){
        super(props);
        this.state = {
            agreeCheck: false,
            isExamStarted: false,
            buttonDisable: true,
        }
        this.termAcceptedChangeHandler = this.termAcceptedChangeHandler.bind(this);
        this.startExam = this.startExam.bind(this);
    }
    termAcceptedChangeHandler= (event) =>{
        if(event.target.value == "on"){
            this.setState({agreeCheck: true, buttonDisable: false});
        }else{
            this.setState({agreeCheck: false, buttonDisable: true});
        }
        
    
    }
    startExam= (event) =>{
        if(this.state.agreeCheck){
            this.setState({isExamStarted: true});
            Window.isTestStarted = this.state.isExamStarted;
            this.props.history.push('./started/questions');
        }else{
            alert("Please Agree for the T & C");
        }
        
    }
    cancel(){
        this.props.history.push('/..');
    }
    render() {
        return (
            <div>
                <div className="div_for_instruction">
                    <h2 className="text-with_red">Read The Instructions Carefully, Before Start the Exam.</h2>
                    <ul>
                        <li>This is Instruction 1.</li>
                        <li>This is Instruction 2.</li>
                        <li>This is Instruction 3.</li>
                        <li>This is Instruction 4.</li>
                        <li>This is Instruction 5.</li>
                        <li>This is Instruction 6.</li>
                        <li>This is Instruction 7.</li>
                        <li>This is Instruction 8.</li>
                        <li>This is Instruction 9.</li>
                        <li>This is Instruction 10.</li>
                        <li>This is Instruction 11.</li>
                        <li>This is Instruction 12.</li>
                        <li>This is Instruction 13.</li>
                        <li>This is Instruction 14.</li>
                        <li>This is Instruction 15.</li>
                    </ul>
                    <label><input type = 'checkbox' onChange={this.termAcceptedChangeHandler} required/>&nbsp;I have read all the instructions, I Agree for the T&C</label>
                    <p></p>
                    <table>
                        <tr>
                            <td>
                            <button className="btn btn-success" disabled={this.state.buttonDisable} onClick={this.startExam}>Start</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </td>
                        </tr>
                    </table>
                    
                </div>
            </div>
        );
    }
}

export default ExamInstructions;