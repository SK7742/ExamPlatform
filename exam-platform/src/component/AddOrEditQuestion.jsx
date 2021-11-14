import React, { Component } from 'react';
import QuestionService from '../service/QuestionService';

class AddOrEditQuestion extends Component {
    constructor(props){
        super(props) 
        this.state = {
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            Question: '',
            answer: '',
            module: '',
            isQuestionActive: '',
            questionDetailById: []
        } 
        this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
        this.changeOptionAHandler = this.changeOptionAHandler.bind(this);
        this.changeOptionBHandler = this.changeOptionBHandler.bind(this);
        this.changeOptionCHandler = this.changeOptionCHandler.bind(this);
        this.changeOptionDHandler = this.changeOptionDHandler.bind(this);
        this.addQuestionHandler = this.addQuestionHandler.bind(this);

      }

      addQuestionHandler = (e) =>{
        e.preventDefault();
        let Question = {question: this.state.Question, optionA: this.state.optionA, optionB: this.state.optionB,
            optionC: this.state.optionC, optionD: this.state.optionD, answer: this.state.answer, module: this.state.module};
        if (this.state.question != '' && this.state.optionA != '' && this.state.optionB != '' 
        && this.state.optionC != '' && this.state.optionD != '' && this.state.answer != '' && this.state.module != '') {
            console.log('QuestionData => ' + JSON.stringify(Question));
            QuestionService.addNewQuestion(Question).then( re =>{
            alert("Question Added!!!");
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
        
      render() {
          if(!this.state.isCalledForUpdate){
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
                                         <label>OptionA*</label>
                                         <input placeholder="OptionA" className="form-control" required
                                             value={this.state.OtionA} onChange={this.changeOptionAHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionB*</label>
                                         <input placeholder="OptionB" className="form-control" required
                                             value={this.state.OptionB} onChange={this.changeOptionBHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionC*</label>
                                         <input placeholder="OptionC" className="form-control" required
                                             value={this.state.OptionC} onChange={this.changeOptionCHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionD*</label>
                                         <input placeholder="OptionD" className="form-control" 
                                             value={this.state.OptionD} onChange={this.changeOptionDHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>Answer*</label>
                                         <select className="form-control" onChange = {(event) =>{
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
                                         <label>Question Module*</label>
                                         <select className="form-control" onChange = {(event) =>{
                                            this.setState({module: event.target.value});
                                            }}>
                                            <option disabled selected value> -- select Question Module -- </option>
                                            <option value="Aptitude">Aptitude</option>
                                        </select>
                                     </div>
    
                                     <p></p>
                                     <button className="btn btn-success" onClick={this.addQuestionHandler}>Add Question</button>
                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                 </form>
                             </div>
                         </div>
                    </div>
                </div>
             </div>
            ); 
          }else{
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
                                         <label>OptionA*</label>
                                         <input placeholder="OptionA" className="form-control" required
                                             value={this.state.OtionA} onChange={this.changeOptionAHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionB*</label>
                                         <input placeholder="OptionB" className="form-control" required
                                             value={this.state.OptionB} onChange={this.changeOptionBHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionC*</label>
                                         <input placeholder="OptionC" className="form-control" required
                                             value={this.state.OptionC} onChange={this.changeOptionCHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>OptionD*</label>
                                         <input placeholder="OptionD" className="form-control" 
                                             value={this.state.OptionD} onChange={this.changeOptionDHandler}/>
                                     </div>
                                     <div className ="form-group">
                                         <label>Answer*</label>
                                         <select className="form-control" onChange = {(event) =>{
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
                                         <label>Question Active Flag*</label>
                                         <select className="form-control" onChange = {(event) =>{
                                            this.setState({isQuestionActive: event.target.value});
                                            }}>
                                            <option disabled selected value> -- select Question Active Flag -- </option>
                                            <option value="Y">Y</option>
                                            <option value="N">N</option>
                                            </select>
                                     </div>
    
                                     <div className ="form-group">
                                         <label>Question Module*</label>
                                         <select className="form-control" onChange = {(event) =>{
                                            this.setState({module: event.target.value});
                                            }}>
                                            <option disabled selected value> -- select Question Module -- </option>
                                            <option value="Aptitude">Aptitude</option>
                                        </select>
                                     </div>
    
                                     <p></p>
                                     <button className="btn btn-success" onClick={this.addQuestionHandler}>Update Question</button>
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
}

export default AddOrEditQuestion;