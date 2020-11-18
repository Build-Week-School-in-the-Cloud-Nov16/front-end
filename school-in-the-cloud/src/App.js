
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminDashboard from './components/AdminDashboard';
import VolunteerDashboard from './components/VolunteerDashboard';
import StudentDashboard from './components/StudentDashboard';

import './App.css';
import FormContainer from "./signUpFormComponents/FormContainer"
import DummyComponent from "./DummyComponent/DummyComponent";
import Nav from "./components/Nav";
import LoginContainer from "./components/LoginContainer";

function App() {
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
        <Route path="/admin" component={AdminDashboard}></Route>
        <Route path="/volunteer" component={VolunteerDashboard}></Route>
        <Route path="/student" component={StudentDashboard}></Route>
      </div>
    </Router>
      

  );
}
export default App;