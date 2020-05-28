import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { StudentInterface } from '../../interfaces/StudentInterface';
import { addStudent } from '../../redux/actions/StudentActions';

export interface AddStudentsProps {
  student: StudentInterface;
  onAddStudent(student: StudentInterface): void;
}

export interface AddStudentsState {
  student: StudentInterface;
}

class AddStudents extends React.Component<AddStudentsProps, AddStudentsState> {
  constructor(props: AddStudentsProps, context: any) {
    super(props, context);
    this.state = {
      student: {
        id: '',
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        phone: '',
        gpa: '',
      },
    };
  }
  public render() {
    return (
      <div>
        <h2>Add New Student</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              value={this.state.student.firstName}
              onChange={this.inputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={this.state.student.lastName}
              onChange={this.inputChange}
            />
          </div>
          <div className="form-group">
            <label>Street Name</label>
            <input
              type="text"
              className="form-control"
              id="street"
              placeholder="Street Name #"
              value={this.state.student.street}
              onChange={this.inputChange}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              value={this.state.student.city}
              onChange={this.inputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Phone"
              value={this.state.student.phone}
              onChange={this.inputChange}
            />
          </div>
          <div className="form-group">
            <label>GPA</label>
            <input
              type="text"
              className="form-control"
              id="gpa"
              placeholder="GPA"
              value={this.state.student.gpa}
              onChange={this.inputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }

  private onAddStudent() {
    this.props.onAddStudent({
      id: this.state.student.id,
      firstName: this.state.student.firstName,
      lastName: this.state.student.lastName,
      street: this.state.student.street,
      city: this.state.student.city,
      phone: this.state.student.phone,
      gpa: this.state.student.gpa,
    });
    this.updateStateOnSubmit();
  }

  private updateStateOnSubmit() {
    this.setState({
      student: {
        id: '',
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        phone: '',
        gpa: '',
      },
    });
  }

  private inputChange = (e: any) => {
    const field = e.target.id;
    let newState = Object.assign({}, this.state);
    newState.student.id = newState.student.id ? newState.student.id : uuidv4();
    switch (field) {
      case 'firstName':
        newState.student.firstName = e.target.value;
        break;
      case 'lastName':
        newState.student.lastName = e.target.value;
        break;
      case 'street':
        newState.student.street = e.target.value;
        break;
      case 'city':
        newState.student.city = e.target.value;
        break;
      case 'phone':
        newState.student.phone = e.target.value;
        break;
      case 'gpa':
        newState.student.gpa = e.target.value;
        break;
      default:
        break;
    }
    this.setState(newState);
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(this.state);
    this.onAddStudent();
  };
}

const mapActionsToProps = {
  onAddStudent: addStudent,
};

export default connect(undefined, mapActionsToProps)(AddStudents);
