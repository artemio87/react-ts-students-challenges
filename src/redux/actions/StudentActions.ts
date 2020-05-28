import { StudentInterface } from '../../interfaces/StudentInterface';

export const ADD_STUDENT = 'student:addStudent';
export const DELETE_STUDENT = 'student:deleteStudent';
export const DETAIL_STUDENT = 'student:detailStudent';

export function addStudent(newStudent: StudentInterface) {
  return {
    type: ADD_STUDENT,
    payload: {
      student: newStudent,
    },
  };
}

export function deleteStudent(id: string) {
  return {
    type: DELETE_STUDENT,
    payload: {
      id,
    },
  };
}

export function detailStudent(id: string) {
  return {
    type: DELETE_STUDENT,
    payload: {
      id,
    },
  };
}
