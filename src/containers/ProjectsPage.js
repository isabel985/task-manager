import React, { Component } from 'react';
import data from '../data/data';

class ProjectsPage extends Component {
  constructor(props) {
      super(props);

      this.state = {
        selectedProject: null,
    }
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
      })
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <div className={ this.state.selectedProject ? `summaries-list sidebar-expanded` : `summaries-list`}>
          <div className="table-headers">
            <h1>Projects</h1>
          </div>
          <div className="add-new">
              <button>Add Project</button>
          </div>
          {/* might need to change later to not be hardcoded */}
          <div className="status-headers">
            <h3>In Consideration</h3>
            <h3>Approved</h3>
            <h3>In Process</h3>
            <h3>Complete</h3>
          </div>
        </div>

      </React.Fragment>

      );
  }
}

export default ProjectsPage;