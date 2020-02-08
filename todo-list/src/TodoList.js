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
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, addTodoField: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    render() {
        const todos = this.state.todos.map(
            x => <Todo
                    key={x.id}
                    id={x.id}
                    todoValue={x.addTodoField}
                    completed={x.completed}
                    handleRemove={() => this.handleRemove(x.id)}
                    updateTodo={this.update}
                    toggleTodo={this.toggleCompletion}
                 />
            ); 
        return(
            <div className="TodoList">
                <h1>Todo List!
                    <span>A Simple React Todo List</span>
                </h1>
                <NewTodoForm addTodo={this.addTodo}/>
                <div id="joku">
                    {todos}
                </div>
                
            </div>
        );
    }

}

export default TodoList;