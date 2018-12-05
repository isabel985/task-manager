import React from 'react';

const TaskDetails = (props) => {
  return (
    <div className="details-sidebar">
    <h1>{props.selectedTask.task_name}</h1>
    <p>{props.selectedProject.project_name}</p>
    <div className="item-detail-group">
      <div className="item-detail">
        <span className="item-detail-label">Status: </span>
        <span className={`item-detail-value status ${props.selectedTask.task_status}`}>
          {props.selectedTask.task_status.replace(/-/g, ' ')}
        </span>
      </div>
    </div>
  </div>
  );
}

export default TaskDetails;