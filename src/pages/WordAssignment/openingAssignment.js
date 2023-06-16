import React from "react";
import { useNavigate } from "react-router-dom";

const OpeningAssignment = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="fs-2 fw-bold text-center">Word Assessment</p>
      <div className="card p-4 shadow-lg border-0 text-center">
        <p className="fs-5 fw-bold mb-0">
          Silahkan baca narasi di bawah selama 5 menit!
        </p>
        <p className="fs-5 mt-2">
          An employee of PT Daidan Grup Indonesia named Sunarto as Technical
          Supervisor of Technical Tug & Barge Department will be sent on a
          business trip to the Site Office located in Kendari, Southeast
          Sulawesi by his superior named Sukirman as Technical Manager. The
          purpose of this business trip is to do an inspection of the barge. The
          business trip will start from Monday, June 5th, 2023 to Saturday, June
          10th, 2023. According to the SOP, it is necessary to make an
          Assignment Letter submission 1 day prior to the departure. Make an
          official Business Trip Assignment Letter according to the narrative
          above.
        </p>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="border bg-danger p-2 text-white text-center w-15">
          01:30
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-success p-2 w-50"
          onClick={() => navigate("/word-assignment")}
        >
          Mulai
        </button>
      </div>
    </>
  );
};

export default OpeningAssignment;
