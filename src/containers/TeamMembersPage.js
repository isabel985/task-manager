import React, { Component } from 'react';
import teammemberdata from '../data/teammembersdata';

class TeamMembersPage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <React.Fragment> 
        <div className="summaries-list team-members">
          <div className="table-headers">
            <h1>Team Members</h1>
          </div>
          <ul className="list">
            <li className="list-item">Hal</li>
            <li className="list-item">Hatem</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }

}

export default TeamMembersPage;