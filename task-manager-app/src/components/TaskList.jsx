import React from 'react';

function TaskList({ tasks, deleteTask, toggleCompletion }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Deadline:</strong> {task.deadline}</p>
          <p><strong>Priority:</strong> {task.priority}</p>

          <label>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleCompletion(task.id)} 
            />
            Mark as Completed
          </label>

          <button onClick={() => deleteTask(task.id)}>Delete Task</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
