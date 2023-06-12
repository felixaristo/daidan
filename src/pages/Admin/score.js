import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { data1, data2 } from "../../assets/Dummy";

const Score = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <p className="fs-6">Name: Dummy 1</p>
          <p className="fs-6">Assessment: Word</p>
        </div>
        <div className="row w-50">
          <div className="card p-4 shadow-lg border-0 w-100 bg-warning col text-white text-center">
            <span className="fs-6">Current Score:</span>
            <span className="fs-4 fw-bold">49</span>
          </div>
          <div className="card p-4 shadow-lg border-0 w-100 ms-4 bg-info col text-white text-center">
            <span className="fs-6">Final Score:</span>
            <span className="fs-4 fw-bold">73</span>
          </div>
        </div>
      </div>
      <Row className="mt-5">
        <Col md={8}>
          <Card className="text-center p-4 shadow-lg border-0">
            <p className="text-center fs-4 fw-bold">Assignment</p>
            <object
              width="100%"
              height="400"
              data="http://www.africau.edu/images/default/sample.pdf"
              type="application/pdf"
            ></object>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 text-center shadow-lg border-0">
            <p className="fw-bold">Grading percent:</p>
            <p>Multiple choice (70%)</p>
            <p>Assignment (30%)</p>
          </Card>
          <Card className="p-4 text-center shadow-lg border-0 mt-4">
            <p className="fw-bold">Enter Score Assignment:</p>
            <div className="d-flex justify-content-center">
              <input
                type="number"
                className="form-control w-20 text-center"
                placeholder="80.."
              />
            </div>
          </Card>
        </Col>
      </Row>
      <div className="card mt-4 p-4 shadow-lg border-0">
        <p className="text-center fs-4 fw-bold">Quiz</p>
        <p className="">1. {data1.question}</p>
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
        <p className="mt-3">2. {data2.question}</p>
        {data2.options.map((item) => (
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
      <div className="d-flex justify-content-between mt-5">
        <button className="btn btn-success p-2 w-10">Prev</button>
        <button className="btn btn-success p-2 w-10">Next</button>
      </div>
    </>
  );
};

export default Score;
