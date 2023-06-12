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
          Seorang karyawan PT Kemala Shipping yang bernama Sunarto yang menjabat
          sebagai Technical Supervisor dari Department Technical Tug & Barge
          diberikan tugas untuk melakukan Perjalanan Dinas ke Site Office di
          Kendari oleh atasannya yang bernama Sukirman, beliau sendiri menjabat
          sebagai Technical Manager di PT Kemala Shipping. Tujuan dari
          Perjalanan Dinas tersebut adalah untuk menginspeksi kapal tongkang.
          Perjalanan Dinas akan dilakukan mulai dari Senin, 5 Juni 2023 selama 5
          hari. Sesuai SOP, perlu dibuat pengajuan Surat Tugas sebelum hari
          keberangkatan. Buatlah Surat Tugas Perjalanan Dinas yang sesuai dengan
          narasi di atas.
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
