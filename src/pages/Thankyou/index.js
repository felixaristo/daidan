import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="fs-2 fw-bold text-center">Assessment</p>
      <div className="card p-4 shadow-lg border-0 text-center">
        <p className="fs-5">
          Terima kasih Anda telah mengerjakan Assessment ini.
        </p>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-success p-2 w-25"
          onClick={() => navigate("/")}
        >
          Kembali ke Home
        </button>
      </div>
    </>
  );
};

export default Thankyou;
