import React, { useState } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    //adding
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    //remove
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id != id)
        setTodos(removeArr);
    }

    //complete
    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updateTodos);
    }


    return (
        <>
            <h1>Set Your Goals Here !</h1>

            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            // updateTodo={updateTodo}
            />
        </>
    )
}

export default TodoList