import React, { Component } from 'react';
import QuestionService from '../service/QuestionService';

class editQuestion extends Component {
	    constructor(props){
        super(props) 
        this.state = {
			questionId: this.props.match.params.id,
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            question: '',
            answer: '',
            module: '',
            isQuestionActive: '',
        } 
        this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
        this.changeOptionAHandler = this.changeOptionAHandler.bind(this);
        this.changeOptionBHandler = this.changeOptionBHandler.bind(this);
        this.changeOptionCHandler = this.changeOptionCHandler.bind(this);
        this.changeOptionDHandler = this.changeOptionDHandler.bind(this);
        this.updateQuestionHandler = this.updateQuestionHandler.bind(this);

      }
      componentDidMount(){
        QuestionService.getQuestionById(this.state.questionId).then( (res) => {
            let Question = res.data;
            this.setState({question: Question.question,
                answer: Question.answer,
                optionA: Question.optionA,
                optionB: Question.optionB,
                optionC: Question.optionC,
                optionD: Question.optionD,
                module: Question.module,
                isQuestionActive: Question.isQuestionActive,
            });
        });
    }
      updateQuestionHandler = (e) =>{
        e.preventDefault();
        let question = {question: this.state.question, optionA: this.state.optionA, optionB: this.state.optionB,
            optionC: this.state.optionC, optionD: this.state.optionD, answer: this.state.answer, module: this.state.module
            ,isQuestionActive: this.state.isQuestionActive};
        if (this.state.question != '' && this.state.optionA != '' && this.state.optionB != '' 
        && this.state.optionC != '' && this.state.optionD != '' && this.state.answer != '' && this.state.module != '') {
            console.log('QuestionData => ' + JSON.stringify(question));
            QuestionService.updateQuestion(question,this.state.questionId).then( re =>{
            alert("Question Updated!!!");
            this.props.history.push('../');
        })
        }else{
            alert("Please all the required Details!")
        }
        
      }
        cancel(){
            this.props.history.push('../');
        }

        changeQuestionHandler = (event) =>{
            this.setState({question: event.target.value});
        }
        changeOptionAHandler = (event) =>{
            this.setState({optionA: event.target.value});
        }
        changeOptionBHandler = (event) =>{
            this.setState({optionB: event.target.value});
        }
        changeOptionCHandler = (event) =>{
            this.setState({optionC: event.target.value});
        }
        changeOptionDHandler = (event) =>{
            this.setState({optionD: event.target.value});
        }
    render() {
        return (
                <div>
                    <p></p>
                <div className = "container">
                    <div className = "row">
                         <div className = "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">Question Details</h3>
                             <div className ="card-body">
                                 <form>
                                     <div className ="form-group">
                                         <label>Question</label>
                                         <input placeholder="Question" className="form-control" required
                                             value={this.state.question} onChange={this.changeQuestionHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionA*</label>
                                         <input placeholder="OptionA" className="form-control" required
                                             value={this.state.optionA} onChange={this.changeOptionAHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionB*</label>
                                         <input placeholder="OptionB" className="form-control" required
                                             value={this.state.optionB} onChange={this.changeOptionBHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionC*</label>
                                         <input placeholder="OptionC" className="form-control" required
                                             value={this.state.optionC} onChange={this.changeOptionCHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionD*</label>
                                         <input placeholder="OptionD" className="form-control" 
                                             value={this.state.optionD} onChange={this.changeOptionDHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>Answer*</label>
                                         <select className="form-control" value={this.state.answer} onChange = {(event) =>{
                                            this.setState({answer: event.target.value});
                                            }}>
                                            <option disabled selected value> -- select Answer -- </option>
                                            <option value="A">Option A</option>
                                            <option value="B">Option B</option>
                                            <option value="C">Option C</option>
                                            <option value="D">Option D</option>
                                        </select>
                                     </div>
                                     <div className ="form-group">
                                         <label>Module*</label>
                                         <select className="form-control" value={this.state.module} onChange = {(event) =>{
                                            this.setState({module: event.target.value});
                                            }}>
                                            <option disabled selected value> -- select Module -- </option>
                                            <option value="A">Aptitude</option>
                                        </select>
                                     </div>
                                     <div className ="form-group">
                                         <label>isQuestionActive</label>
                                         <select className="form-control" value={this.state.isQuestionActive}onChange = {(event) =>{
                                            this.setState({isQuestionActive: event.target.value});
                                            }}>
                                            <option disabled selected value> -- select Active Flag -- </option>
                                            <option value="Y">Yes</option>
                                            <option value="N">No</option>
                                        </select>
                                     </div>
                                     <p></p>
                                     <button className="btn btn-success" onClick={this.updateQuestionHandler}>Update Question</button>
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

export default editQuestion;