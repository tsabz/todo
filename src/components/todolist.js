import React from 'react';
import Todo from './todo.js';

const TodoList = () => {
    return (
        <div className="todo-container">
        <ul className="todo-list">
            <Todo />
        </ul>
      </div>
    )
}

export default TodoList;