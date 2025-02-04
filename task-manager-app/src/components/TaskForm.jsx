import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('low');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message on form submission

    if (!title || !description || !deadline) {
      setError('Please fill in all fields');
      return;
    }

    // Check if the deadline is in the future
    const currentDate = new Date();
    if (new Date(deadline) < currentDate) {
      setError('Deadline must be in the future');
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      deadline,
      priority,
      completed: false,
    };
    addTask(newTask);

    // Clear the form fields
    setTitle('');
    setDescription('');
    setDeadline('');
    setPriority('low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label>
        Deadline:
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </label>

      <label>
        Priority:
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>} 

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
