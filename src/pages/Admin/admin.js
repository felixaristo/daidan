import { icon } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import dataAdmin, { data } from "./dataTable";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="fs-5 fw-bold text-center">Selamat datang, Admin</p>
      <Row className="mt-3">
        <div className="card p-4 shadow-lg border-0 w-25 bg-warning text-white">
          <p className="fs-6 col">Finished Word Assessment</p>
          <span className="fs-4 fw-bold col">1</span>
        </div>
        <div className="card p-4 shadow-lg border-0 w-25 ms-4 bg-info text-white">
          <p className="fs-6">Finished Excel Assessment</p>
          <span className="fs-4 fw-bold">1</span>
        </div>
      </Row>
      <Table bordered hover striped className="mt-5">
        <thead className="bg-secondary text-white">
          <tr>
            <th width="5%">No.</th>
            <th>Name</th>
            <th>Score Word</th>
            <th>Score Excel</th>
            <th>Total Score</th>
            <th width="5%">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataAdmin.map((item) => (
            <tr>
              <td>{item.number}</td>
              <td>{item.name}</td>
              <td>{item.total}</td>
              <td>{item.total}</td>
              <td>{item.total}</td>
              <td className="text-center">
                <i
                  class="bi bi-info-circle-fill pointer"
                  // onClick={() => navigate("/score")}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
