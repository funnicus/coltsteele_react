import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

class Todo extends Component{
    render(){

        const edit = <FontAwesomeIcon icon={faPen}>Edit Todo</FontAwesomeIcon>
        const remove = <FontAwesomeIcon icon={faTrash}>Remove Todo</FontAwesomeIcon>

        return(
            <div className="Todo">
                <p>{this.props.todoValue}</p>
                <button onClick={this.props.handleRemove}>{edit}</button>
                <button onClick={this.props.handleRemove}>{remove}</button>
            </div>
        )
    }
}

export default Todo;