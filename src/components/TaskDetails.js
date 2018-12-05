import React from 'react';

const TaskDetails = (props) => {
    return (
        <div className="details-sidebar">
        <h1>{props.selectedTask.task_name}</h1>
        </div>
    );
}

export default TaskDetails;