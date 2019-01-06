import React, { Component } from 'react';
import data from '../data/data';
import TaskSummary from '../components/TaskSummary';
import TaskDetails from '../components/TaskDetails';
import AddTaskForm from '../components/AddTaskForm';
import Header from '../components/Header';

class TasksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTask: null,
      selectedProject: null,
      addTask: false
    }
  }

  handleAddTaskSave = (project_id, task) => {
    console.log(`adding task: `, task);
    console.log(`to project id: `, project_id);

    let projectIndex = data.findIndex(project => project.project_id === project_id);

    console.log(`data project index: `, data[projectIndex]);
    
    data[projectIndex].project_tasks.push(task);

    this.setState({addTask: false});
  }

  handleDisplayAddTaskForm = () => {
    this.setState({addTask: true});
  }

  handleCancelAddTaskForm = () => {
    this.setState({addTask: false});
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
      this.setState({
        selectedTask: null,
        selectedProject: null
      });
    } else {
      this.setState({
        selectedTask,
        selectedProject
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn-display-add-modal"
          onClick={this.handleDisplayAddTaskForm}>
            Add Task
        </button>
        
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
                  isSelected={task === this.state.selectedTask && true}
                />
              })
            })}
          </ul>
        </div>

        {console.log("state selected Task", this.state.selectedTask)}
        {console.log("state selected Project", this.state.selectedProject)}
          
        {this.state.selectedTask && <TaskDetails selectedTask={this.state.selectedTask} selectedProject={this.state.selectedProject}/>}
      
      <AddTaskForm
        displayModal={this.state.addTask}
        handleAddTaskSave={this.handleAddTaskSave}
        handleCancelAddTaskForm={this.handleAddTaskForm} />

      </React.Fragment>
    );
  }
}

export default TasksPage;