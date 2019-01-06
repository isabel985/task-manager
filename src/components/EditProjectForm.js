import React, { Component } from 'react';

class EditProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.project
    }
  }

    handleInputChange = (e) => {
      this.setState({
        project: {
          ...this.state.project,
          [e.target.name]: e.target.value
        }
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();

      console.log(this.state.project);
      
      this.props.handleProjectDetailsSave(this.state.project);
    }

  render() {
    return(     
      <React.Fragment>

        <form onSubmit={this.handleSubmit}>
          <button 
            className="edit-project-details"
            type="submit">
              Save
          </button>

          <div className="item-detail-group">
          <div className="item-detail">
                <label className="item-detail-label">
                  Category:
                </label>

                <div className="item-detail-value">
                  <input
                    className="item-detail-input"
                    type="text"
                    name="project_category"
                    onChange={this.handleInputChange}
                    value={this.state.project.project_category} />
                </div>
              </div>

          </div>

        </form>

      </React.Fragment>
    );
  }
}

export default EditProjectForm;