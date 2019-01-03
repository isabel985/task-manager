import React, { Component } from 'react';

class TeamMemberForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`modal` + `${this.props.displayModal ? ` show` : ``}`}>
        <div className="modal-content">
          <h2>Add Team Member</h2>
          <form>
            <div className="item-detail-group">
              <div className="item-detail">
                <label className="item-detail-label">Name:</label>
                
                <div className="item-detail-value">
                  <input className="item-detail-input" type="text"></input>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button">Cancel</button>
              <button type="submit">Add</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default TeamMemberForm;