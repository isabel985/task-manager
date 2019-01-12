import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import data from '../data/data';

class AddTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        task_name: '',
        task_status: 'in-consideration',
        task_due_date: '',
        task_end_date: '',
        task_assigned_to: this.props.teammembersdata[0].member_id,
        task_assigned_by: this.props.teammembersdata[0].member_id,
        task_description: ''
      },
      project_id: data[0].project_id
    }
  }

  handleInputChange = (e) => {
    this.setState({
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value
      }
    });
  }

  handleProjectInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task.task_name.trim()) {
      let submittedTask = this.state.task;

      let task = Object.assign({
        task_id: uuidv4()
      }, submittedTask);

      this.props.handleAddTaskSave(this.state.project_id, task);

      this.handleReset();
    }
  }

  handleReset = () => {
    this.setState({
      task: {
        task_name: '',
        task_status: 'in-consideration',
        task_due_date: '',
        task_end_date: '',
        task_assigned_to: this.props.teammembersdata[0].member_id,
        task_assigned_by: this.props.teammembersdata[0].member_id,
        task_description: ''
      },
      project_id: data[0].project_id
    });
  }

  displayTeamMemberName = () => {
    return this.props.teammembersdata.map( (member) => {
      return(
        <option value={member.member_id}>
        
        {member.member_name}

        </option>
      );
    })
  }

  render() {
    return(
      <div className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
        <div className="modal-content">
          <h2>Add Task</h2>
          <form onSubmit={this.handleSubmit}>
            
            <div className="item-detail-group">
              <div className="item-detail">
                <label className="item-detail-label">
                  Task Name:
                </label>

                <div className="item-detail-value">
                  <input
                    className="item-detail-input"
                    type="text"
                    name="task_name"
                    onChange={this.handleInputChange}
                    value={this.state.task.task_name} />
                </div>
              </div>
            </div>

            <div className="item-detail-group">
              <div className="item-detail">
                <label className="item-detail-label">
                  Status:
                </label>

                <div className="item-detail-value">
                  <select
                    className="item-detail-input"
                    name="task_status"
                    onChange={this.handleInputChange}
                    value={this.state.task.task_status}>
                    
                    <option value="in-consideration">
                      In Consideration
                    </option>
                    <option value="approved">
                      Approved
                    </option>
                    <option value="in-process">
                      In Process
                    </option>
                    <option value="complete">
                      Complete
                    </option>

                  </select>
                </div>
              </div>

              <div className="item-detail">
                <label className="item-detail-label">
                  Project Name:
                </label>

                <div className="item-detail-value">
                  <select
                    className="item-detail-input"
                    name="project_id"
                    onChange={this.handleProjectInputChange}
                    value={this.state.project_id}>

                    {data.map( (project) => {
                      return <option
                        key={project.project_id}
                        value={project.project_id}
                        >
                      {project.project_name}
                      </option>
                    })}
                    
                  </select>
                </div>
              </div>

              <div className="item-detail">
                <label className="item-detail-label">
                  Due Date:
                </label>

                <div className="item-detail-value">
                  <input
                    className="item-detail-input"
                    type="text"
                    name="task_due_date"
                    onChange={this.handleInputChange}
                    value={this.state.task.task_due_date} />
                </div>
              </div>
            </div>

            <div className="item-detail-group">
              <div className="item-detail">
                <label className="item-detail-label">
                  Assigned To:
                </label>

                <div className="item-detail-value">
                  <select
                    className="item-detail-input"
                    name="task_assigned_to"
                    onChange={this.handleInputChange}
                    value={this.state.task.task_assigned_to} 
                  >

                  {this.displayTeamMemberName()}

                  </select>
                </div>
              </div>

              <div className="item-detail">
                <label className="item-detail-label">
                  Assigned By:
                </label>

                <div className="item-detail-value">
                  <select
                    className="item-detail-input"
                    name="task_assigned_by"
                    onChange={this.handleInputChange}
                    value={this.state.task.task_assigned_by} 
                  >
                    {this.displayTeamMemberName()}

                  </select>
                </div>
              </div>
            </div>

            <div className="item-detail-group">
              <div className="item-detail full-width">
                <label className="item-detail-label">
                  Description:
                </label>

                <div className="item-detail-value paragraph">
                  <textarea
                    className="item-detail-input"
                    type="text"
                    name="task_description"
                    onChange={this.handleInputChange}
                    value={this.state.task.task_description} />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button"
                onClick={this.props.handleCancelAddTaskForm}
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
    )
  }
}

export default AddTaskForm;