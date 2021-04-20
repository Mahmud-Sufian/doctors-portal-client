import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
 

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/allPatients">
          <AllPatients></AllPatients>
        </Route>
        <PrivateRoute exact path="/addDoctor">
          <AddDoctor></AddDoctor>
        </PrivateRoute>
        <PrivateRoute path="/appointment">
          <Appointment></Appointment>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch> 
    </Router>
    </userContext.Provider>
  );
}

export default App;
