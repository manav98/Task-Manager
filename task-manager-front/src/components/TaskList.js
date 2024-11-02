import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
    return (
        <div className='task-list'>
            {tasks.length > 0 ? (
                tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                    />
                ))
            ) : (
                <p>No tasks available.</p>
            )}
        </div>
    );
};

export default TaskList;
