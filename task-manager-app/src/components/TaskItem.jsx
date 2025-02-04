import React from 'react';

function TaskItem({ task, toggleTaskCompletion }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Deadline:</strong> {task.deadline}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p>
        <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
      </p>
      <button
        onClick={() => toggleTaskCompletion(task.id)}
        style={{
          backgroundColor: task.completed ? '#28a745' : '#007bff',
        }}
      >
        {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
    </div>
  );
}

export default TaskItem;
