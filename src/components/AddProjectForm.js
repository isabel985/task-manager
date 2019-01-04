import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class AddProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project_name: '',
      project_status: '',
      project_category: '',
      project_due_date: '',
      project_end_date: '',
      project_assigned_to: '',
      project_assigned_by: '',
      project_resource_link: '',
      project_final_link: '',
      project_description: '',
      project_notes: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.project_name.trim()) {
      let submittedProject = this.state;

      let project = Object.assign({
        project_id: uuidv4()
      }, submittedProject);

      this.props.handleAddProjectSave(project);

      this.handleReset();
    }
  }

  handleReset = () => {
    this.setState({
      project_name: '',
      project_status: '',
      project_category: '',
      project_due_date: '',
      project_end_date: '',
      project_assigned_to: '',
      project_assigned_by: '',
      project_resource_link: '',
      project_final_link: '',
      project_description: '',
      project_notes: ''
    });
  }

  render() {
    return(
      <div className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
        <div className="modal-content">
          <h2>Add Project</h2>
          <form onSubmit={this.handleSubmit}>
            
            <div className="item-detail-group">
              <div className="item-detail">
                <label className="item-detail-label">
                  Project Name:
                </label>

                <div className="item-detail-value">
                  <input
                    className="item-detail-input"
                    type="text"
                    name="project_name"
                    onChange={this.handleInputChange}
                    value={this.state.project_name} />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button"
                onClick={this.props.handleCancelAddProjectForm}
                >Cancel
              </button>

              <button 
                type="submit" 
                >Add
              </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default AddProjectForm;