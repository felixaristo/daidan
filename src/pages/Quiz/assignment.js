import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { data1 } from "../../assets/Dummy";

const Assignment = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="fs-2 fw-bold text-center">Word Assessment</p>
      <div className="card p-4 shadow-lg border-0">
        <p className="text-justify">
          PT ABCD ingin membuat konten pembelajaran multimedia interaktif
          (E-learning) yang dibutuhkan oleh unit Learning & Development. Untuk
          memenuhi kebutuhan tersebut, diperlukan pihak ketiga sebagai vendor
          untuk mengerjakan kebutuhan e-learning tersebut. Buatlah sebuah SPH
          (Surat Permintaan Harga) yang ditujukan kepada pihak penyedia jasa
          pembuatan e-learning. Silahkan buat surat permintaan harga tersebut di
          dokumen Microsoft Word Anda. Kemudian upload berkas file hasil
          kerja Anda disini"
        </p>
      </div>
      <div className="mt-4">
        <input className="form-control" type="file" id="formFile" />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-success p-2 w-10 mx-2">Upload</button>
        <button className="btn btn-success p-2 w-10 mx-2">Cancel</button>
      </div>
      <p className="mt-3">Question 3 of 3</p>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-success p-2 w-10"
          onClick={() => navigate("/question-2")}
        >
          Prev
        </button>
        <div className="border w-25 bg-danger p-2 text-white text-center">
          05:19
        </div>
        <button
          className="btn btn-success p-2 w-10"
          onClick={() => navigate("/word-assignment")}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Assignment;
