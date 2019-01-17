import React, { Component } from 'react';
import EditProjectForm from './EditProjectForm';
import ProjectDetailsDisplay from './ProjectDetailsDisplay';
import data from '../data/data';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingProject: null,
      editProject: false
    }
  }

  handleProjectDetailsEdit = () => {
    this.setState({
      // editingProject: this.props.selectedProject,
      editProject: true
    });

    console.log(`editProject: true`);
  }

  handleProjectDetailsSave = project => {
// add code here to save changes to project
// think about how to use the spread operator for the project itself

    let foundProject = data.find(dataProject => dataProject.project_id === project.project_id);

    data[foundProject] = project;

    console.log(`project receive from project edit form: `, project.project_name);

    console.log(data[foundProject]);

    this.setState({
      // editingProject: project,
      editProject: false
    });
  }

  displayTeamMemberName = (id) => {
    return this.props.teammembersdata.filter( (member) => {
      return member.member_id === id;
    })[0].member_name;
  }

  render() {
    return(

    <div className="details-sidebar">
      <h3>{this.props.selectedProject.project_name}</h3>

      {this.state.editProject 
      ?      
        <EditProjectForm 
        project={this.props.selectedProject}
        handleProjectDetailsSave=
        {this.handleProjectDetailsSave}/> 
      : 
        <ProjectDetailsDisplay 
        project={this.props.selectedProject}
        handleProjectDetailsEdit={this.handleProjectDetailsEdit}/> 
      }

      <div className="item-detail-group">
        <div className="item-detail">
          <span className="item-detail-label">Status: </span>
          <span className={`item-detail-value status ${this.props.selectedProject.project_status}`}>
            {this.props.selectedProject.project_status.replace(/-/g, ' ')}</span>
        </div>
        
        
      </div>

      <div className="item-detail-group">
        <div className="item-detail">
          <span className="item-detail-label">Due Date: </span>
          <span className="item-detail-value">{this.props.selectedProject.project_due_date}
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Actual End Date: </span>
          <span className="item-detail-value">{this.props.selectedProject.project_end_date}
          </span>
        </div>
      </div>

      <div className="item-detail-group">
        <div className="item-detail">
          <span className="item-detail-label">Assigned To: </span>
          <span className="item-detail-value">

          {this.displayTeamMemberName(this.props.selectedProject.project_assigned_to)}
            
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Assigned By: </span>
          <span className="item-detail-value">
          
          {this.displayTeamMemberName(this.props.selectedProject.project_assigned_by)}

          </span>
        </div>
      </div>

      <div className="item-detail-group">
        <div className="item-detail">
          <span className="item-detail-label">Resource Link: </span>
          <span className="item-detail-value">{this.props.selectedProject.project_resource_link}
          </span>
        </div>
        <div className="item-detail">
          <span className="item-detail-label">Project Link: </span>
          <span className="item-detail-value">{this.props.selectedProject.project_final_link}
          </span>
        </div>
      </div>
      
      <div className="item-detail-group">
        <div className="item-detail full-width">
          <span className="item-detail-label">Description: </span>
          <span className="item-detail-value paragraph">{this.props.selectedProject.project_description}
          </span>
        </div>
        <div className="item-detail full-width">
          <span className="item-detail-label">Notes: </span>
          <span className="item-detail-value paragraph">{this.props.selectedProject.project_notes}
          </span>
        </div>
      </div>

    </div>
  );
  }
}

export default ProjectDetails;