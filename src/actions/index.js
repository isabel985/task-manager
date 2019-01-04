import uuidv4 from 'uuid/v4';
import { ADD_MEMBER } from './types';

export const addMember = ({ member_name }) => ({
  type: ADD_MEMBER,
  payload: {
    member_id: uuidv4(),
    member_name
  }
})