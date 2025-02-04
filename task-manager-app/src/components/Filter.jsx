import React from 'react';

function Filter({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter">
      <label>
        Filter Tasks:
        <select onChange={handleFilterChange} defaultValue="all">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;