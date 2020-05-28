import React from 'react';
import { connect } from 'react-redux';
import { StudentsInterface } from '../../interfaces/StudentsInterface';
import { StudentInterface } from '../../interfaces/StudentInterface';
import { deleteStudent } from '../../redux/actions/StudentActions';

export interface showStudentsProps {
  students: StudentInterface[];
  onRemoveStudent(id: string): void;
}

class ShowStudent extends React.Component<showStudentsProps, {}> {
  public render() {
    const { students } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Students List</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Street</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">GPA</th>
              <th scope="col">options</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.street}</td>
                <td>{student.city}</td>
                <td>{student.phone}</td>
                <td>{student.gpa}</td>
                <td>
                  <a href={`/students/${student.id}`}>
                    <i className="material-icons btn btn-primary">
                      remove_red_eye
                    </i>
                  </a>
                  <i
                    className="material-icons btn btn-danger"
                    data-id={student.id}
                    data-action="delete"
                    onClick={this.handleClick}
                  >
                    delete
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  public handleClick = (e: React.MouseEvent<HTMLTableRowElement>): void => {
    const { id, action } = e.currentTarget.dataset;
    if (action === 'delete') {
      this.onRemoveStudent(id!);
    }
  };

  public onRemoveStudent = (id: string): void => {
    this.props.onRemoveStudent(id);
  };
}

const mapStateToProps = (state: StudentsInterface) => {
  return {
    students: state.students,
  };
};

const mapActionsToProps = {
  onRemoveStudent: deleteStudent,
};

export default connect(mapStateToProps, mapActionsToProps)(ShowStudent);
