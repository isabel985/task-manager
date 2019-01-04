import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class TeamMemberForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member_name: ""
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.member_name.trim()) {
      // this.props.onAddMember(this.state);
      let submittedTeamMember = this.state;
      let teamMember = Object.assign({member_id: uuidv4()}, submittedTeamMember);

      this.props.handleAddTeamMemberSave(teamMember);

      this.handleReset();
    }
  }

  handleReset = () => {
    this.setState({
      member_name: ''
    });
  }

  render() {
    return (
      <div className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
        <div className="modal-content">
          <h2>Add Team Member</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="item-detail-group">
              <div className="item-detail">
                <label className="item-detail-label">Name:</label>
                
                <div className="item-detail-value">
                  <input 
                    className="item-detail-input" 
                    type="text"
                    name="member_name"
                    onChange={this.handleInputChange}
                    value={this.state.member_name}
                    />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button"
                onClick={this.props.handleCancelTeamMemberForm}
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

export default TeamMemberForm;