import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/all-tasks'); // Replace with your backend endpoint
        const data = await response.json();
        setTasks(data.slice(0, 10)); // Fetch first 10 tasks for brevity
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      {loading ? <p>Loading tasks...</p> : <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
