import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { data1 } from "../../assets/Dummy";

const Question1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="fs-2 fw-bold text-center">Word Assessment</p>
      <div className="card p-5 shadow-lg border-0">
        <p className="fs-5">{data1.question}</p>
        {data1.options.map((item) => (
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label class="form-check-label">{item}</label>
          </div>
        ))}
      </div>
      <p className="mt-5">Question 1 of 3</p>
      <div className="d-flex justify-content-between">
        <div className="w-10"></div>
        <div className="border w-25 bg-danger p-2 text-white text-center">
          10:00
        </div>
        <button
          className="btn btn-success p-2 w-10"
          onClick={() => navigate("/question-2")}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Question1;
