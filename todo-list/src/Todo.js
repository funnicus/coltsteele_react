import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.todoValue
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false});
    }

    handleToggle(evt){
        this.props.toggleTodo(this.props.id);
    }

    render(){
        let result;
        const edit = <FontAwesomeIcon icon={faPen}>Edit Todo</FontAwesomeIcon>
        const remove = <FontAwesomeIcon icon={faTrash}>Remove Todo</FontAwesomeIcon>

        if(this.state.isEditing){
            result = (
                <div>
                    <form className="TodoForm" onSubmit={this.handleUpdate}>
                        <input 
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>save</button>
                    </form>
                </div>
            )
        }
        else {
            result = (
                <div className="Todo">
                    <div>
                        <p className={this.props.completed ? 'completed' : ""} onClick={this.handleToggle}>{this.props.todoValue}</p>
                    </div>
                    <button onClick={this.toggleForm}>{edit}</button>
                    <button onClick={this.props.handleRemove}>{remove}</button>
                </div>
            )
        }
        return result;
    }
}

export default Todo;