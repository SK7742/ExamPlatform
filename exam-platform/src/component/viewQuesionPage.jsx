import React, { Component } from 'react';
import QuestionService from '../service/QuestionService';
import AddOrEditQuestion from './AddQuestion';

class viewQuesionPage extends Component {
    constructor(props){
        super(props) 
        this.state = {
            questions: []
        }
        this.addQuestion = this.addQuestion.bind(this);
        this.editQuestion = this.editQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }
    componentDidMount(){
        QuestionService.getQuestionsList().then((res) => {
            this.setState({questions:res.data});
        });
    }
    addQuestion(){
        this.props.history.push('/addQuestion');
    }
    editQuestion(id){
        <AddOrEditQuestion isCalledForUpdate = {true}/>
        this.props.history.push(`./updateQuestion/${id}`);
    }
    deleteQuestion(id){
        this.props.history.push(`/addQuestion/${id}`);
    }
    render() {
        return (
            <div>
                <p></p>
                <h2 className="text-center">Questions List</h2>
                <div className="column">
                  <p></p>  
                </div>
                <div className="row">
                <table className="table table-hover table-bordered">
                    <thead> 
                        <tr>
                            <th>Question</th>
                            <th>Option A</th>
                            <th>Option B</th>
                            <th>Option C</th>
                            <th>Option D</th>
                            <th>Module</th>
                            <th>QuestionFlag</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.questions.map(
                                question =>
                                <tr key = {question.questionId}>
                                    <td> { question.question}</td>
                                    <td> { question.optionA}</td>
                                    <td> { question.optionB}</td>
                                    <td> { question.optionC}</td>
                                    <td> { question.optionD}</td>
                                    <td> { question.module}</td>
                                    <td> { question.isQuestionActive}</td>
                                    <td>
                                        <button onClick = {() => this.editQuestion(question.questionId)} className="btn btn-primary">Update</button>
                                        <button onClick = {() => this.deleteQuestion(question.id)} style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr> 
                            )
                        }
                    </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default viewQuesionPage;