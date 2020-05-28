import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from './redux/store';
import AddStudents from './components/addStudents';
import ShowStudent from './components/showStudents';
import StudentDetails from './components/studentDetails';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">Code-Challenge</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/students">
                  Show
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container p-3">
          <Switch>
            <Route path="/" exact component={AddStudents} />
            <Route path="/students" exact component={ShowStudent} />
            <Route path="/students/:id" exact component={StudentDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
