import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toLocaleDateString()
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    // Missing closing parenthesis here
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📝 My Todo List</h1>
          <p className="subtitle">Stay organized and get things done</p>
        </header>

        <div className="input-section">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="What needs has be done?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="todo-input"
            />
            <button onClick={addTodo} className="add-btn" disabled={!inputValue.trim()}>
              Add
            </button>
          </div>
        </div>

        {todos.length > 0 && (
          <div className="stats">
            <span className="stats-text">
              {completedCount} of {totalCount} completed
            </span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">✨</span>
              <p>No todos yet. Add one above!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>

        {todos.length > 0 && (
          <button onClick={() => setTodos([])} className="clear-all-btn">
            Clear All Todos
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
