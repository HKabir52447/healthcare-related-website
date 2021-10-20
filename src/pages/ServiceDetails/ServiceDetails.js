import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleService, setSingleServie] = useState({});
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  useEffect(() => {
    const foundService = details.find((doctor) => doctor.id == id);
    setSingleServie(foundService);
    console.log(foundService);
  }, [details]);
  return (
    <div className="py-5">
      <div className="service-content mx-auto pb-4">
        <div>
          <h4>{singleService?.depertment} </h4>
          <p>{singleService?.about}</p>
        </div>
        <div>
          <img className="img-fluid w-75" src={singleService?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
