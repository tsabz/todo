import React from 'react';
import Todo from './todo.js';

const TodoList = ({todos,setTodos}) => {
    
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} id={todo.id}/>
            ))}
        </ul>
      </div>
    )
}

export default TodoList;