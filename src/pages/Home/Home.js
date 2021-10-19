import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Doctor from "../Doctor/Doctor";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  // show services in home
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(1, 7)));
  }, []);

  // show doctors in home
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data.slice(1, 7)));
  }, []);

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Medico Healthcare</h1>
              <h3>Your wealth, is your health</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1> Latest Medical Equipment </h1>
              <h3>
                We will provide you best treatment using latest medical
                technology and equipment
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Experienced Surgeon</h1>
              <h3>We have many experienced surgeon</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="py-5">
        <h3 className="py-3">Our Services</h3>
        <div className="service-container">
          {services.map((service) => (
            <Service key={service.id} services={service}></Service>
          ))}
        </div>
        <div className="text-center my-4">
          <Link to="/services">
            <button className="btn sub-heading px-4 py-1 details fs-4">
              {" "}
              See More..{" "}
              <span className="arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>{" "}
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img className='img-fluid w-100 hospital' src="https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80" alt='' />
      </div>
      <div className="py-5">
        <h3 className="py-3">Doctors</h3>
        <div className="service-container">
          {doctors.map((doctor) => (
            <Doctor key={doctors.id} doctor={doctor}></Doctor>
          ))}
        </div>
        <div className="text-center my-4">
          <Link to="/doctors">
            <button className="btn sub-heading px-4 py-1 details fs-4">
              {" "}
              See More..{" "}
              <span className="arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
