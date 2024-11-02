import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskInput, setTaskInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/all-tasks');
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setLoading(false);
    }
  };;

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    if (taskInput.trim()) {
      try {
        fetch('http://localhost:8080/api/add-task', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: taskInput,
            dueDate: format(new Date(), "yyyy-MM-dd"),
            completed: false,
          })
        }).then(response => response.json())
        .then(data => console.log(data))
      } catch (error) {
        console.error('Error:', error);
      }

      fetchTasks()
    }
  };

  const editTask = (task) => {
    setIsEditing(true);
    setTaskInput(task.title);
    setCurrentTask(task);
  };

  const updateTask = () => {
    setTasks(tasks.map(task =>
      task.id === currentTask.id ? { ...task, title: taskInput } : task
    ));
    setIsEditing(false);
    setTaskInput("");
    setCurrentTask(null);
  };

  const deleteTask = (id) => {
    try {
      fetch('http://localhost:8080/api/delete-task/' + (id), {
        method: 'GET'
      }).then(response => response.json())
      .then(data => console.log(data))
    } catch (error) {
      console.error('Error:', error);
    }

    fetchTasks()

  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="task-form">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={isEditing ? updateTask : addTask}>
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>
      {loading ? <p>Loading tasks...</p> : <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;