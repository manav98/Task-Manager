import React from 'react';

const Task = ({ task, editTask, deleteTask }) => {
    return (
        <div className="task">
            <span className={task.completed ? "completed" : ""}>
                {task.title}
            </span>
            <div>
                <button onClick={() => editTask(task)} className="edit-button">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
            </div>
        </div>
    );
};

export default Task;
