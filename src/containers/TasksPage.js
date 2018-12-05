import React, { Component } from 'react';
import data from '../data/data';
import TaskSummary from '../components/TaskSummary';
import TaskDetails from '../components/TaskDetails'

class TasksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {selectedTask: null}
  }

  handleDisplayTaskDetails = (project_id, task_id) => {
    let selectedProject = data.filter( (project) => {
      return project.project_id === project_id;
    })[0];

    let selectedTask = selectedProject.project_tasks.filter( (task) => {
      return task.task_id === task_id;
    })[0];

    this.setState({selectedTask});

    if (selectedTask === this.state.selectedTask) {
      this.setState({selectedTask: null});
    } else {
      this.setState({selectedTask});
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={ this.state.selectedTask ? `summaries-list sidebar-expanded` : `summaries-list` }>
          <div className="table-headers">
            <h1>Tasks</h1>
            <span>Due Date</span>
            <span>Project Name</span>
          </div>
          <ul className="list">
            {data.map( (project)  => {
              return project.project_tasks.map( (task) => {
                return <TaskSummary 
                  key={task.task_id} 
                  task={task}
                  project_id={project.project_id}
                  project_name={project.project_name}
                  handleDisplayTaskDetails={this.handleDisplayTaskDetails}
                />
              })
            })}
          </ul>
        </div>

        {console.log(this.state.selectedTask)}

        {this.state.selectedTask && <TaskDetails selectedTask={this.state.selectedTask}/>}
      </React.Fragment>
    );
  }
}

export default TasksPage;