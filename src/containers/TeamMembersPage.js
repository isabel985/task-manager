import React, { Component } from 'react';
import teammemberdata from '../data/teammembersdata';
import TeamMembersSummary from '../components/TeamMembersSummary';
import TeamMemberForm from '../components/TeamMemberForm';

class TeamMembersPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      addTeamMember: false
    }
  }

  handleAddTeamMemberSave = (member) => {
    teammemberdata.push(member);

    this.setState({addTeamMember: false});
  }

  handleDisplayAddTeamMemberForm = () => {
    this.setState({addTeamMember: true});
  }

  handleCancelTeamMemberForm = () => {
    this.setState({addTeamMember: false});
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
          handleCancelTeamMemberForm={this.handleCancelTeamMemberForm} 
          handleAddTeamMemberSave={this.handleAddTeamMemberSave}
        />

      </React.Fragment>
    )
  }
}

export default TeamMembersPage;