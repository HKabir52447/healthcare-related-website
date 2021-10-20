import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { depertment, img } = props.services;
  return (
    <div className="service">
      <img className="img-fluid" src={img} alt={depertment} />
      <h4 className="sub-heading text-center">{depertment}</h4>
      <p>
        Welcome to Medico Healthcare. Here we provied best treatment by
        qualitiful and experienced doctors.
      </p>
      <div className="text-center">
        <Link to='/serviceDetails'>
          <button className="btn sub-heading px-4 py-1 details fs-4">
            {" "}
            Details{" "}
            <span className="arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
