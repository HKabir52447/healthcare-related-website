import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const {name, depertment, doctor} = props.doctor;
   
    return (
        <div className='doctor'>
            <img src={doctor} alt={name} className='img-fluid'/>
            <h4 className='name'>{name}</h4>
            <h6 className='pb-3'>Depertment of <span className='fs-4'>{depertment}</span> </h6>
            <div className="text-center">
        <Link to='/doctorDetails'>
          <button className="btn sub-heading px-4 py-1 details fs-4 mb-3">
            {" "}
            Details{" "}
            <span className="arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>{" "}
          </button>
        </Link>
      </div>
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