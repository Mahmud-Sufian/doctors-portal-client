import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid" src={doctor} alt=""/>
                </div>
                <div className="col-md-7 my-5 pb-5"> 
                       <h4 className="text-primary text-uppercase ">Appointment</h4>
                        <h1 className="my-4 text-white">Make an Appointment <br/> Today</h1>
                        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default MakeAppointment;