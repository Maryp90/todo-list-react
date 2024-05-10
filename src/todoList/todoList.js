import React, { useState } from "react";


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const newTodoObj = { text: newTodo, completed: false};
            setTodos([...todos, newTodoObj]);
            setNewTodo(''); //Clear the input field after adding the new Todo
        }
    };

    const toggleCompletion = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    return (
        <div>
            <input 
                type="text"
                value={newTodo}
                onChange={handleChange}
                placeholder="Create a new Todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleCompletion(index)}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}
                        >
                         {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );  
}

export default TodoList;