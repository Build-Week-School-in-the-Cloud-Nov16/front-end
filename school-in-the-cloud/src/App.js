
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminDashboard from './Components/AdminDashboard';
import VolunteerDashboard from './Components/VolunteerDashboard';
import StudentDashboard from './Components/StudentDashboard';
import PrivateRoute from './Components/PrivateRoute';
import EditTask from './Components/EditTask';

import './App.css';
import FormContainer from "./signUpFormComponents/FormContainer"
import DummyComponent from "./DummyComponent/DummyComponent";
import Nav from "./Components/Nav";
import LoginContainer from "./Components/LoginContainer";

function App(props) {
  return (
    <Router>
      <div className="App">
        <div>
         
        </div>

        <Route exact path="/"> 
          <Nav />
          <LoginContainer /> 
        </Route>
        <Route path="/sign-up">  
          <Nav />
          <FormContainer/>
        </Route>
        <PrivateRoute path="/admin" component={AdminDashboard}></PrivateRoute>
        <PrivateRoute path="/volunteer" component={VolunteerDashboard}></PrivateRoute>
        <PrivateRoute path="/student" component={StudentDashboard}></PrivateRoute>

        <Route exact path='/edit-task/:id' render={() => (
          <EditTask />
        )} />
      </div>
    </Router>
      

  );
}
export default App;