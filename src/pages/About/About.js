import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className='about-details'>
        <div>
          <h5 className="pt-4">About Us</h5>
          <h3 className="heading"> <span style={{color: "#e10f28"}}>Medico</span> Healthcare </h3>
          <p className='about-description'>Medioco is a trusted name of Medical Services who is always at your side and your health is our first priority. <br/> MedicoCare will be administered through plan-based customizable programs that incorporate partnership between family members and the care givers for long term illness or disease management..

          </p>
        </div>
        <div className='d-flex align-items-center'>
    <img src="https://images.unsplash.com/photo-1575654402689-8f45b1ee6179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80" className='img-fluid ' alt=''/>
        </div>
      </div>
    </div>
  );
};

export default About;