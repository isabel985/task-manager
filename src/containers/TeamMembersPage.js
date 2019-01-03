import React, { Component } from 'react';
import teammemberdata from '../data/teammembersdata';
import TeamMembersSummary from '../components/TeamMembersSummary';

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
          {teammemberdata.map( (member) => {
            return <TeamMembersSummary 
              key={member.member_id} 
              member={member}
            />
          })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default TeamMembersPage;