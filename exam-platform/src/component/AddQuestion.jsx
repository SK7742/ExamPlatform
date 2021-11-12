import React, { Component } from 'react';
import QuestionService from '../service/QuestionService';

class AddQuestion extends Component {
    constructor(props){
        super(props) 
        this.state = {
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            Question: '',
        } 
        this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
        this.changeOptionAHandler = this.changeOptionAHandler.bind(this);
        this.changeOptionBHandler = this.changeOptionBHandler.bind(this);
        this.changeOptionCHandler = this.changeOptionCHandler.bind(this);
        this.changeOptionDHandler = this.changeOptionDHandler.bind(this);

      }

      addQuestion = (e) =>{
        e.preventDefault();
        let Question = {Question: this.state.Question, optionA: this.state.optionA, optionB: this.state.optionB,
            optionC: this.state.optionC, optionD: this.state.optionD};
        console.log('QuestionData => ' + JSON.stringify(Question));
        QuestionService.addNewQuestion(Question).then( re =>{
            alert("Question Added!!!");
            this.props.history.push('../');
        })
      }

        changeQuestionHandler = (event) =>{
            this.setState({Question: event.target.value});
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
        cancel(){
            this.props.history.push('../');
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
                                         value={this.state.Question} onChange={this.changeQuestionHandler}/>
                                 </div>
                                 <div className ="form-group">
                                     <label>OptionA</label>
                                     <input placeholder="OptionA" className="form-control" required
                                         value={this.state.OtionA} onChange={this.changeOptionAHandler}/>
                                 </div>
                                 <div className ="form-group">
                                     <label>OptionB</label>
                                     <input placeholder="OptionB" className="form-control" required
                                         value={this.state.OptionB} onChange={this.changeOptionBHandler}/>
                                 </div>
                                 <div className ="form-group">
                                     <label>OptionC</label>
                                     <input placeholder="OptionC" className="form-control" required
                                         value={this.state.OptionC} onChange={this.changeOptionCHandler}/>
                                 </div>
                                 <div className ="form-group">
                                     <label>OptionD</label>
                                     <input placeholder="OptionD" className="form-control" required
                                         value={this.state.OptionD} onChange={this.changeOptionDHandler}/>
                                 </div>
                                 <p></p>
                                 <button className="btn btn-success" onClick={"#"}>Add Question</button>
                                 <button className="btn btn-danger" onClick={"#"} style={{marginLeft: "10px"}}>Cancel</button>
                             </form>
                         </div>
                     </div>
                </div>
            </div>
         </div>
        );
    }
}

export default AddQuestion;