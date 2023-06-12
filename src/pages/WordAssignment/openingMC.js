import React from "react";
import { useNavigate } from "react-router-dom";

const OpeningWord = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="fs-2 fw-bold text-center">Word Assessment</p>
      <div className="card p-5 shadow-lg border-0 text-center">
        <p className="fs-5">
          Selamat Datang di Word Assessment. Selesaikanlah setiap intruksi yang
          ditampilkan di layar. Fokus dalam mengerjakan setiap butir soal.
        </p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-success p-2 w-25"
          onClick={() => navigate("/question-1")}
        >
          Mulai
        </button>
      </div>
    </>
  );
};

export default OpeningWord;
