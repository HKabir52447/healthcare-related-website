import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const {name, depertment, doctor} = props.doctor;
    console.log(props)
    return (
        <div className='doctor'>
            <img src={doctor} alt={name} className='img-fluid'/>
            <h4 className='name'>{name}</h4>
            <h6 className='pb-3'>Depertment of <span className='fs-4'>{depertment}</span> </h6>
            <div className='social-media mx-2'> 
                <a href='https://www.facebook.com/' target='blank'><i class="fab fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/?hl=en' target='blank'><i class="fab fa-instagram"></i></a>
                <a href='https://www.linkedin.com/' target='blank'><i class="fab fa-linkedin-in"></i></a>
                <a href='https://twitter.com/' target='blank'><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    );
};

export default Doctor;