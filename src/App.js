import React, { Component } from 'react';
import './App.css';
import AddEmployee from './addEmploye/add'
import ShowEmployee from './showEmployee/show'
import Send from './addEmploye/add'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <div className="navbar">
              <NavLink exact to="/show">Show Employee</NavLink>
              <NavLink to="/add">Add Employee</NavLink>
              <NavLink to="/send">Send to db</NavLink>
            </div>
            <div className="content">
              <Route exact path="/show" component={ShowEmployee}/>
              <Route path="/add" component={AddEmployee}/>
              <Route path="/send" component={Send}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
