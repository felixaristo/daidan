import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { data1 } from "../../assets/Dummy";
import axios from "axios";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [score, setScore] = useState("");

  const submit = () => {
    const PPData = new FormData();
    PPData.append("excel", file);
    axios
      .post(
        `${process.env.REACT_APP_URL}daidan/upload_excel_assessment`,
        PPData
      )
      .then((res) => {
        setScore(res.data.nilai);
        navigate("/thankyou")
      })
      .catch((err) => {
        alert("failed");
      });
  };

  return (
    <>
      <p className="fs-2 fw-bold text-center">Excel Assessment</p>
      <div className="card p-4 shadow-lg border-0">
        <p className="text-center">
          Kerjakan soal excel dalam template berikut lalu upload sesuai dengan
          jawaban Anda.
        </p>
        <div className="d-flex justify-content-center mt-1">
          <button
            className="btn btn-primary p-2 w-25"
            onClick={() =>
              (window.location.href = "https://demo-dls.onegml.com/daidan.xlsx")
            }
          >
            Download Template
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p>Submit pekerjaan Anda di sini:</p>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={(e) => {
            e.preventDefault();
            setFile(e.target.files[0]);
          }}
        />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-success p-2 w-10 mx-2" onClick={submit}>
          Submit
        </button>
        {/* <button className="btn btn-success p-2 w-10 mx-2">Cancel</button> */}
      </div>
      {/* <p className="text-center fs-2 fw-bold mb-0 mt-2">{score}</p> */}
      <div className="d-flex justify-content-center mt-2">
        <div className="border w-25 bg-danger p-2 text-white text-center">
          05:19
        </div>
      </div>
    </>
  );
};

export default Upload;
