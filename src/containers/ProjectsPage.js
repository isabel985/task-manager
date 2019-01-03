import React, { Component } from 'react';
import data from '../data/data';
import ProjectSummary from '../components/ProjectSummary';
import ProjectDetails from '../components/ProjectDetails';
import Header from '../components/Header';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedProject: null }
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
    return (
      <React.Fragment>
        <button className="btn-display-add-modal">Add Project</button>
        <div className={ 
          `summaries-list projects` + 
          `${this.state.selectedProject 
            ? ` sidebar-expanded` 
            : ``}` 
          }
        >
        {/* <div className={ this.state.selectedProject ? `summaries-list sidebar-expanded` : `summaries-list` }> */}
        
        {/* line above is old code. line above works the same but now we don't have to repeat class names */}

          <div className="table-headers">
            <h1>Projects</h1>
          </div>
          {/* might need to change later to not be hardcoded */}
          <div className="status-headers">
            <h3>In Consideration</h3>
              <ul className="list">
              {this.getProjectsByStatus("in-consideration").map( (project) => {
                return <ProjectSummary 
                key={project.project_id}
                project={project}
                project_name={project.project_name}
                handleDisplayProjectDetails={this.handleDisplayProjectDetails}
                isSelected={project === this.state.selectedProject && true}
                />
              } )}
              </ul>
            <h3>Approved</h3>
              <ul className="list">
              {this.getProjectsByStatus("approved").map( (project) => {
                return <ProjectSummary 
                key={project.project_id}
                project={project}
                project_name={project.project_name}
                handleDisplayProjectDetails={this.handleDisplayProjectDetails}
                isSelected={project === this.state.selectedProject && true}
                />
                } 
              )}
            </ul>
            <h3>In Process</h3>
              <ul className="list">
              {this.getProjectsByStatus("in-process").map( (project) => {
                return <ProjectSummary 
                key={project.project_id}
                project={project}
                project_name={project.project_name}
                handleDisplayProjectDetails={this.handleDisplayProjectDetails}
                isSelected={project === this.state.selectedProject && true}
                />
              } )}
            </ul>
            <h3>Complete</h3>
              <ul className="list">
              {this.getProjectsByStatus("complete").map( (project) => {
                return <ProjectSummary 
                key={project.project_id}
                project={project}
                project_name={project.project_name}
                handleDisplayProjectDetails={this.handleDisplayProjectDetails}
                isSelected={project === this.state.selectedProject && true}
                />
              } )}
            </ul>
          </div>
        </div>
        {console.log("state selected Project", this.state.selectedProject)}

        {this.state.selectedProject && <ProjectDetails selectedProject={this.state.selectedProject} />}
      </React.Fragment>
    );
  }
}

export default ProjectsPage;