import React,  { Component } from "react";
import uuid from "uuid/v4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./newTodoForm.css";

class NewTodoForm extends Component{

    constructor(props){
        super(props);
        this.state = {addTodoField: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        const newTodo = {...this.state, id: uuid(), completed: false};
        this.props.addTodo(newTodo);
        let curState = {...this.state};
        curState = {addTodoField: ""};
        this.setState(this.state = curState);
    }

    render(){

        const plus = <FontAwesomeIcon icon={faPlus}>Add Todo</FontAwesomeIcon>

        return(
            <div className = "newTodoForm">
                <h2>Add Todo</h2>
                <form onSubmit={this.state.addTodoField === "" ? e => {e.preventDefault()} : this.handleSubmit}>
                    <input
                    type="text"
                    name="addTodoField"
                    value={this.state.addTodoField}
                    placeholder="add todo..."
                    onChange={this.handleChange}
                    />
                    <button onClick>{plus}</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;