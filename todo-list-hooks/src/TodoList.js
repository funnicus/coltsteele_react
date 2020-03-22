import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoList( {todos, removeTodo, toggleTodo, editTodo} ) {
    if(todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                <>
                    <Todo 
                     {...todo}
                     key={todo.id} 
                     removeTodo={removeTodo}
                     toggleTodo={toggleTodo}
                     editTodo={editTodo}
                     />
                    {todos.length -1 > i && <Divider />}
                </>
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;