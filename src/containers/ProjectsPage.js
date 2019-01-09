import React, { Component } from 'react';
import data from '../data/data';
import ProjectSummary from '../components/ProjectSummary';
import ProjectDetails from '../components/ProjectDetails';
import AddProjectForm from '../components/AddProjectForm';
import Header from '../components/Header';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      selectedProject: null,
      addProject: false 
    }
  }

  handleAddProjectSave = (project) => {
    let savedProject = Object.assign(project, {
      project_tasks: []
    });
    
    data.push(project);

    this.setState({addProject: false});
  }

  handleDisplayAddProjectForm = () => {
    this.setState({addProject: true});
  }

  handleCancelAddProjectForm = () => {
    this.setState({addProject: false});
  }

  handleDisplayProjectDetails = (project_id) => {
    let selectedProject = data.filter( (project) => {
      return project.project_id === project_id;
    })[0];

    this.setState({selectedProject});

    if (selectedProject === this.state.selectedProject) {
      this.setState({
        selectedProject: null
      });
    } else {
      this.setState({
        selectedProject
      });
    } 
  }
  
  getProjectsByStatus = (status) => {
    return data.filter( ({project_status} ) => {
      return project_status === status;
    });
  }

  render() {

    let statuses = ["in-consideration", "approved", "in-process", "complete"];

    return (
      <React.Fragment>

        <button 
        className="btn-display-add-modal"
        onClick={this.handleDisplayAddProjectForm}>
          Add Project
        </button>

        <div className={ 
          `summaries-list projects` + 
          `${this.state.selectedProject 
            ? ` sidebar-expanded` 
            : ``}` 
          }
        >

          <div className="table-headers">
            <h1>Projects</h1>
          </div>

            {statuses.map( (status) => {
              return (
                <React.Fragment>
                  <h3 className="status">{status.replace(/-/g, ' ')}</h3>
                    
                  <ul className="list">
                    {this.getProjectsByStatus(status).map( (project) => {
                      return <ProjectSummary 
                      key={project.project_id}
                      project={project}
                      project_name={project.project_name}
                      handleDisplayProjectDetails={this.handleDisplayProjectDetails}
                      isSelected={project === this.state.selectedProject && true}
                      />
                    } )}
                  </ul>
                </React.Fragment>
              );
            })}

        </div>
        {console.log("state selected Project", this.state.selectedProject)}

        {this.state.selectedProject && <ProjectDetails selectedProject={this.state.selectedProject} />}

        <AddProjectForm
          displayModal={this.state.addProject}
          handleAddProjectSave={this.handleAddProjectSave}
          handleCancelAddProjectForm={this.handleCancelAddProjectForm}
          statuses={statuses}
        />

      </React.Fragment>
    );
  }
}

export default ProjectsPage;