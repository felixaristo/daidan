import axios from "axios";
import React from "react";
import { browserName } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const OpeningWord = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleStart = () => {
    axios
      .post(
        `${process.env.REACT_APP_URL}daidan/start?browser=${browserName}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => navigate("/quiz"))
      .catch((err) => {
        alert("failed");
      });
  };

  return (
    <>
      <p className="fs-2 fw-bold text-center">Word Assessment</p>
      <div className="card p-5 shadow-lg border-0 text-center">
        <p className="fs-5">
          Selamat Datang di Word Assessment. Selesaikanlah setiap instruksi yang
          ditampilkan di layar. Fokus dalam mengerjakan setiap butir soal.
        </p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-success p-2 w-25" onClick={handleStart}>
          Mulai
        </button>
      </div>
    </>
  );
};

export default OpeningWord;
