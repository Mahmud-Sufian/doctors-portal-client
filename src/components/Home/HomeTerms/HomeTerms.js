import React from 'react';
import patient from '../../../images/patient.png';

const HomeTerms = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row my-5">
                <div className="col-md-5 m-md-0">
                    <img className="img-fluid" src={patient} alt=""/>
                </div>
                <div className="col-md-7 align-self-center">
                    <h2>Exceptional Dental <br/> Care, On Your Term</h2>
                    <p className="my-5" style={{textAlign:'justify'}}>Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore, tenetur a optio recusandae deleniti aspernatur fugiat! Porro, atque ea. dolor sit Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cumque eligendi recusandae voluptas quam fuga temporibus? Porro error soluta adipisci labore asperiores. Voluptate sint ducimus soluta! Deserunt velit reiciendis itaque excepturi. Possimus ex iste deserunt laborum sed, libero voluptate ipsa, quia laboriosam, enim voluptates. Sint, assumenda! Fugit facere error sequi! sit amet consectetur, adipisicing elit. Dolore minima commodi repudiandae ipsam pariatur? Nam reprehenderit eius aut suscipit perspiciatis. amet consectetur adipisicing elit. Unde veniam perferendis temporibus aliquid totam quis.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>

 
    );
};

export default HomeTerms;