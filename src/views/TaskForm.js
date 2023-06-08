import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask('');
  };

  return (
    <div>
      <h2 style={{color:"teal"}}>Add Task</h2>
      <form onSubmit={handleSubmit}>
      <label >Write Task:--</label>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" required />
        <br></br>
        <button type="submit" style={{width:"8%"}}>ADD</button>
      </form>
    </div>
  );
};

export default TaskForm;
// <label>Title: <input type="text" name="title" placeholder="Enter Product Title" value={formData.title} onChange={handleChange}/></label><br />