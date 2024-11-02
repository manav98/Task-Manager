import React from 'react';

const Task = ({ task }) => {
    return (
        <div className="task">
            <span className={task.completed ? "completed" : ""}>
                {task.title}
            </span>
            <span >
                {task.dueDate}
            </span>

        </div>
    );
};

export default Task;
