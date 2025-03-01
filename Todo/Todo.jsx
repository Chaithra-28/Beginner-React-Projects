import React, { useState } from 'react'

import "../style.css";

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit = () => {
        if (input.trim() === '') return; // Prevent empty todos

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                text: input,
                id: Math.floor(Math.random() * 1000), // More unique IDs
            },
        ]);

        setInput('');
    };

    const removeTodo = id => setTodos(todos => todos.filter(t => t.id  !== id));

  return (

    <div className='container'>

        <input 
        type="text" 
        placeholder='Enter new todo' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">

            {todos.map(({text, id}) => (

                <li className='todo' key={id}>

                    <span>{text}</span>

                    <button className='close' onClick={() => removeTodo(id)}>
                        x
                    </button>

                </li>
            ))}

        </ul>

    </div>

  )
}

export default Todo
