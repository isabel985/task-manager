import React from 'react';

const TeamMembersSummary = ({
  member: {
    member_id,
    member_name
  }
  }) => {
  
  return (
    <li className="list-item">
      <span>{member_name}</span>
    </li>
  );
}

export default TeamMembersSummary;