import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminDashboard from './components/AdminDashboard';
import VolunteerDashboard from './components/VolunteerDashboard';
import StudentDashboard from './components/StudentDashboard';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import FormContainer from "./signUpFormComponents/FormContainer"
import DummyComponent from "./DummyComponent/DummyComponent";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
         
        </div>

        <Route exact path="/"> 
          <Nav />
          <DummyComponent /> 
        </Route>
        <Route path="/sign-up">  
          <Nav />
          <FormContainer/>
        </Route>
        <PrivateRoute path="/admin" component={AdminDashboard}></PrivateRoute>
        <PrivateRoute path="/volunteer" component={VolunteerDashboard}></PrivateRoute>
        <PrivateRoute path="/student" component={StudentDashboard}></PrivateRoute>
      </div>
    </Router>
      

  );
}

export default App;
