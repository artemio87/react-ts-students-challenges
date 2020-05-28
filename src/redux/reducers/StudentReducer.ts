import { StudentInterface } from '../../interfaces/StudentInterface';
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  DETAIL_STUDENT,
} from '../actions/StudentActions';

const studentReducer = (state: StudentInterface[] = [], action: any) => {
  let newState: StudentInterface[] = [];
  switch (action.type) {
    case ADD_STUDENT:
      newState = [...state, action.payload.student];
      return newState;
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload.id);
    case DETAIL_STUDENT:
      return state.filter((student) => student.id !== action.payload.id);
    default:
      return state;
  }
};

export default studentReducer;
