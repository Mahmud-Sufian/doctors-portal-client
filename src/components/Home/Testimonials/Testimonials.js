import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import ellips1 from '../../../images/Ellipse 1.png';
import ellips2 from '../../../images/Ellipse 2.png';
import ellips3 from '../../../images/Ellipse 3.png';


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : ellips1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ellips2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : ellips3
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header mt-5 ms-3">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
                </div>
                <div className="row mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;