import React, {Component} from 'react';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            todos: [

            ]
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(newTodo){
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    handleRemove(id){
        this.setState(state => ({
            todos: this.state.todos.filter(todo => todo.id !== id)
        }))
    }

    render() {
        const todos = this.state.todos.map(
            x => <Todo
                    key={x.id}
                    id={x.id}
                    todoValue={x.addTodoField}
                    handleRemove={() => this.handleRemove(x.id)}
                 />
            ); 
        return(
            <div className="TodoList">
                <h1>Todo List!</h1>
                <p>A Simple React Todo List</p>
                <hr></hr>
                <NewTodoForm addTodo={this.addTodo}/>
                <div id="joku">
                    {todos}
                </div>
                
            </div>
        );
    }

}

export default TodoList;