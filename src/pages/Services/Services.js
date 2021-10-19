import React, { useEffect, useState } from "react";
import Service from "../../pages/Service/Service";
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className='py-4'>
      <h5 className="sub-heading text-center pt-2">Services</h5>
      <h3 className="heading text-center">Service we provide</h3>
      <div className='service-container'>
        {services.map((service) => (
          <Service key={service.id} services={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;