import React, { Component } from 'react';
import QuestionService from '../service/QuestionService';
import "./ExamInterface.css";
class ExamInterface extends Component {
    constructor(props){
        super(props);
        this.state = {
            questionCounter: 0,
            questions: []
            
        }
    }
    componentDidMount(){
        QuestionService.prepareQuestionListForExam().then((res) =>{
            this.setState({questions:res.data})
        })
    }
    changeEventHandler(){
        this.state.questions.map(
            question =>
            <tr key = {question.questionId}>
                <td><label>Question: {question.question}</label></td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <div className="question-area-div">
                    <label>QuestionNo: {this.state.questionCounter + 1}</label>

                </div>
            </div>
        );
    }
}

export default ExamInterface;