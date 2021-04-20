import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {

    const [modalIsOpen,setIsOpen] =  useState(false);
    function openModal() {
      setIsOpen(true);
    } 
    function closeModal(){
      setIsOpen(false);
    }
  



    return (
        <div className="col-md-4">
            <div class="card text-center mt-4 p-3">
            <div class="card-body">
                <h5 class="card-title">{booking.subject}</h5>
                <h6 class="card-text">{booking.visitingHour}</h6>
                <p>{booking.totalSpace} Space Available</p>
                <button onClick={openModal} class="btn btn-primary">Book Appointment</button>
                <AppointmentForm date={date} name={booking.subject} modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentForm>
            </div>
            </div>
        </div>
    );
};

export default BookingCard;