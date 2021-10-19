import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="doctors pt-4">
      <h5 className="text-center sub-heading">Doctors</h5>
      <h3 className="text-center heading">Our Qualitiful Doctors</h3>
      <div className="doctor-container">
        {doctors.map((doctor) => (
          <Doctor key={doctors.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;