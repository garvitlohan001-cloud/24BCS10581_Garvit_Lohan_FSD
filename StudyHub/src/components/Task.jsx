import React, { useEffect, useReducer, useRef } from 'react'
import { useAuth } from '../context/AuthContext'

const demoTasks = [
    { id: 1, title: "Finish DBMS assignment", completed: false },
    { id: 2, title: "Revise React hooks", completed: false },
    { id: 3, title: "Submit lab report", completed: true },
]

const initialTasks = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return demoTasks;
        case "ADD_TASKS":
            if(!action.element || action.element.title.trim() === "") return state;
            return [...state, action.element];
        case "TOGGLE_TASK":
            return state.map(task =>
                task.id === action.id
                    ? { ...task, completed: !task.completed }
                    : task
            );
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.id);
        default:
            throw new Error("Invalid action")
    }
}


const Task = () => {
    const { student } = useAuth();
    const taskRef = useRef();
    const [tasks, dispatch] = useReducer(reducer, initialTasks);

    useEffect(() => {
        dispatch({ type: "SET_TASKS" });
    }, [])

    return (
        <div>
            <h3>My Tasks</h3>
            {!student ? (
                <p>Login to see your tasks</p>
            ) : (
                <div>
                    <input ref={taskRef} type="text" placeholder='Enter new task' required />
                    <button onClick={() => dispatch({ type: "ADD_TASKS", element: { id: tasks.length + 1, title: taskRef.current.value, completed: false } })}>Add</button>

                    <div>
                        {tasks.map((task) => (
                            <div key={task.id} style={{ display: "flex", gap: "4px" }}>
                                <input type="checkbox" checked={task.completed} onChange={() => dispatch({ type: "TOGGLE_TASK", id: task.id })} />
                                <p>{task.title}</p>
                                <button onClick={() => dispatch({ type: "DELETE_TASK", id: task.id })}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Task