import React from 'react';

const TaskSummary = ({
  task: {
    task_id, 
    task_name, 
    task_due_date
  }, 
  project_id, 
  project_name, 
  handleDisplayTaskDetails, 
  isSelected
  }) => {
  
  return (
    <li className="list-item">
      <span>{task_name}</span>
      <span>{task_due_date}</span>
      <span>{project_name}</span>
      <button onClick={()=>handleDisplayTaskDetails(project_id, task_id)}>{isSelected ? "<" : ">"}</button>
    </li>
  );
}

export default TaskSummary;