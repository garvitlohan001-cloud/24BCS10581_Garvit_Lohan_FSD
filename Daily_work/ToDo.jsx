import { useState } from "react";

export default function App() {
  
  const [task, setTask] = useState("");

  
  const [tasks, setTasks] = useState([
    "Walk the dog",
    "Water the plants",
    "Wash the dishes",
  ]);

  
  function handleSubmit() {
    
    if (task.trim() === "") return;

    setTasks([...tasks, task]);

    setTask("");
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}