import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminDashboard from './components/AdminDashboard';
import VolunteerDashboard from './components/VolunteerDashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/admin' component={AdminDashboard}/>

        <Route path='/volunteer' component={VolunteerDashboard} />
      </div>
    </Router>

  );
}

export default App;
