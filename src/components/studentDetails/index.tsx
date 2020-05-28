import React from 'react';
import { connect } from 'react-redux';
import { StudentsInterface } from '../../interfaces/StudentsInterface';
import { StudentInterface } from '../../interfaces/StudentInterface';

export interface showStudentProps {
  student: StudentInterface[];
  match: { params: { id: string } };
}

class ShowStudent extends React.Component<showStudentProps, {}> {
  public render() {
    const { student, match } = this.props;
    const filtered = student.filter(
      (student) => student.id === match.params.id,
    );
    const divStyle = {
      width: '18rem',
    } as React.CSSProperties;
    return (
      <div>
        <h2>Student Detail</h2>

        {filtered[0] && (
          <div className="card" style={divStyle}>
            <img className="card-img-top" src="https://picsum.photos/286/280" />
            <div className="card-body">
              <h5 className="card-title">
                {filtered[0].firstName} {filtered[0].lastName}
              </h5>
              <div className="card-text">
                <div>
                  <b>Address: </b>
                  {filtered[0].street}, {filtered[0].city}
                </div>
                <div>
                  <b>Phone: </b>
                  {filtered[0].phone}
                </div>
                <div>
                  <b>GPA: </b>
                  {filtered[0].gpa}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: StudentsInterface) => {
  return {
    student: state.students,
  };
};

export default connect(mapStateToProps)(ShowStudent);
