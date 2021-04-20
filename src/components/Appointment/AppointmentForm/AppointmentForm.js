import React from 'react';
import Modal from 'react-modal';
import {useForm} from 'react-hook-form';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen, closeModal, name, date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
         data.service = name;
         data.date = date; 
         data.created = new Date()
        
        fetch(`https://fathomless-basin-26570.herokuapp.com/addAppointment`, {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('success appointment');
                closeModal();
            }
        })

        
    }
  
     
   

    return (
        <div>
       
        <Modal
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className="text-primary text-center">{name}</h2>
          <p className="text-center text-danger">{date.toDateString()}</p>
          {/* <div>I am a modal</div> */}

            <form onSubmit={handleSubmit(onSubmit)} className="p-5"> 
            <input name="name" className="form-control" {...register("name", { required: true })}  placeholder="Phone Name"/>
            <br/>
            {errors.name && <span>This field is required</span>}
            
            <input name="phone" className="form-control" {...register("phone", { required: true })}  placeholder="Phone Number"/>
            <br/>
            {errors.phone && <span>This field is required</span>}

            <input name="email" className="form-control" {...register("email", { required: true })}  placeholder="Your Email"/>
            <br/>
            {errors.email && <span>This field is required</span>}

            {/* <input />  */}
                <select name="gender"  {...register("gender", { required: true })}  placeholder="Male">
                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                </select>
            {errors.gender && <span>This field is required</span>}

            <input name="age"  {...register("age", { required: true })} type="number"  placeholder="Your Age"/> 
            {errors.age && <span>This field is required</span>}

            <input name="weight" {...register("weight", { required: true })} type="number" placeholder="Your Weight"/> 
            {errors.weight && <span>This field is required</span>}
      
            <br/>
            <br/>
            <input className="btn btn-outline-secondary me-2" type="submit" />
            <button className="btn btn-outline-secondary" onClick={closeModal}>close</button>
            </form>
            
        </Modal>
      </div>
    );
};

export default AppointmentForm;