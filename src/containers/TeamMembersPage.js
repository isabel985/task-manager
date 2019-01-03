import React, { Component } from 'react';
import teammemberdata from '../data/teammembersdata';
import TeamMembersSummary from '../components/TeamMembersSummary';
import teamMembers from '../data/teammembersdata';
import TeamMemberForm from '../components/TeamMemberForm';

class TeamMembersPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      addTeamMember: false
    }
  }

  handleDisplayAddTeamMemberForm = () => {
    this.setState({addTeamMember: true});
    console.log(this.state.addTeamMember);
  }

  render() {
    return (
      <React.Fragment> 

        <button 
          className="btn-display-add-modal"
          onClick={this.handleDisplayAddTeamMemberForm}
        >
          Add Team Member
        </button>

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

        <TeamMemberForm 
          displayModal={this.state.addTeamMember}
        />

      </React.Fragment>
    )
  }
}

export default TeamMembersPage;