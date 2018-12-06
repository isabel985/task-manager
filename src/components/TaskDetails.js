import React from 'react';

const TaskDetails = (props) => {
  return (
    <div className="details-sidebar">
      <h1>{props.selectedTask.task_name}</h1>
      <p>{props.selectedProject.project_name}</p>
      <div className="item-detail-group">
        <button className="edit-task-details">Edit</button>
        <div className="item-detail">
          <span className="item-detail-label">Status: </span>
          <span className={`item-detail-value status ${props.selectedTask.task_status}`}>
            {props.selectedTask.task_status.replace(/-/g, ' ')}
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Due Date: </span>
          <span className="item-detail-value">{props.selectedTask.task_due_date}
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Actual End Date: </span>
          <span className="item-detail-value">{props.selectedTask.task_end_date}
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Assigned To: </span>
          <span className="item-detail-value">{props.selectedTask.task_assigned_to}
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Assigned By: </span>
          <span className="item-detail-value">{props.selectedTask.task_assigned_by}
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Description: </span>
          <span className="item-detail-value">{props.selectedTask.task_description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;