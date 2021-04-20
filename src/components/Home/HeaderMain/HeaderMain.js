import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:'600px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum impedit vitae mollitia sapiente minus ea!</p>
                 <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;