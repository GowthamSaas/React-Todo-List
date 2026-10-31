import React from 'react';
import '../App.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span className="checkmark"></span>
        </label>
        <div className="todo-text-wrapper">
          <span className="todo-text">{todo.text}</span>
          <span className="todo-date">Added: {todo.createdAt}</span>
        </div>
      </div>
      <button onClick={() => onDelete(todo.id)} className="delete-btn" title="Delete todo">
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;