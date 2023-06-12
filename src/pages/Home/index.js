import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/Daidan-assesment-04.png";
import banner2 from "../../assets/Daidan-assesment-05.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center my-6">
      <p className="fs-5 fw-bold">
        Selamat datang, silahkan mengerjakan assessment berikut.
      </p>
      <div className="mt-5">
        <img className="mx-5 pointer" src={banner} width="auto" height={150} onClick={()=>navigate('/opening-word-mc')}/>
        <img className="mx-5 pointer" src={banner2} width="auto" height={150} onClick={()=>navigate('/opening-word-excel')}/>
      </div>
    </div>
  );
};

export default Home;
