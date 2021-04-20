import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitining from '../../../images/whitining.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name:'Flouride Treatment',
        img:flouride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        img:whitining
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
            </div>

            <div  className=" d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;