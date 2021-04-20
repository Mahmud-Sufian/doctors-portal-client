import React, { useContext, useEffect, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { userContext } from "../../../App";

const Dashboard = () => { 
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  useEffect(() => {
    fetch(`https://fathomless-basin-26570.herokuapp.com/appointmentsByDate`, {
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({date: selectedDate, email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setAppointments(data))
  },[selectedDate, loggedInUser.email])

  return (
    <section style={{height:'100%', backgroundColor:'#24ACF2'}} className="container-fluid row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>

      <div className="col-md-5">
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>

      <div className="col-md-5">
        <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
      </div>
    </section>
  );
};

export default Dashboard;
