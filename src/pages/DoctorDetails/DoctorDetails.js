import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import "./DoctorDetails.css";

const DoctorDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  useEffect(() => {
    const foundDoctor = details.find((doctor) => doctor.id == id);
    setSingleData(foundDoctor);
    console.log(foundDoctor);
  }, [details]);
  return (
    <div>
      <div className="py-3">
        <img className="img-fluid w-25" src={singleData?.doctor} alt="" />
        <h3 className="heading pt-2">Dr. {singleData?.name}</h3>
      </div>
      <div className="details-content mx-auto pb-4">
        <div>
          <img className="img-fluid w-75" src={singleData?.img} alt="" />
        </div>
        <div>
          <h4>{singleData?.depertment} </h4>
          <p>{singleData?.about}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
