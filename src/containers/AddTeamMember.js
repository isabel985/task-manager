import { connect } from 'react-redux';
import { addMember } from '../actions';
import TeamMemberForm from '../components/TeamMemberForm';

const mapDispatchToProps = dispatch => {
  return {
    onAddMember: member => {
      dispatch(addMember(member));
    }
  }
}

export default connect(null, mapDispatchToProps)(TeamMemberForm);