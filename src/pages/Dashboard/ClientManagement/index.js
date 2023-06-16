import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useNavigate } from "react-router-dom";

const ClientManagement = () => {
  const navigate = useNavigate();
  const [dataClient, setDataClient] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalData, setTotalData] = useState(0);
  const [current, setCurrent] = useState(1);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const token = localStorage.getItem("token");

  const getData = (pageSize, pageIndex, searchIndex) => {
    axios
      .get(
        `${process.env.REACT_APP_URL}holland/company/list/${pageSize ?? 10}/${
          pageIndex ?? 1
        }`,
        {
          headers: { Authorization: "Bearer " + token },
          params: { search: searchIndex },
        }
      )
      .then((res) => {
        setDataClient(res.data.data);
        setTotalData(res.data.totaldata);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = () => {
    axios
      .post(
        `${process.env.REACT_APP_URL}holland/company/delete/${id}`,
        { id_value: id },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="card border-0 py-2 mx-3 shadow-lg my-4">
      <div className="card-body">
        <p className="text-blue fw-bold fs-4">Company Management</p>
        <div className="d-flex justify-content-between">
          <div className="input-group w-70">
            <input
              className="form-control"
              placeholder="Search"
              onChange={(e) => getData(10, 1, e.target.value)}
            />
            <span className="input-group-text">
              <i class="fas fa-search text-secondary"></i>
            </span>
          </div>
          <div className="d-flex">
            <div
              className="btn bg-blue text-white me-2"
              onClick={() => navigate("/add-client")}
            >
              <i class="fas fa-plus me-2" style={{ fontSize: 14 }}></i>
              Add Company
            </div>
          </div>
        </div>
        <table class="table table-bordered mt-3 rounded rounded-3 overflow-hidden">
          <thead>
            <tr className="bg-blue text-white">
              <th className="fw-normal">No.</th>
              <th className="fw-normal">Icon</th>
              <th className="fw-normal">Name</th>
              <th className="fw-normal">Aksi</th>
            </tr>
          </thead>
          {dataClient.map((item) => (
            <tbody>
              <tr>
                <th scope="row" className="fw-normal" width="5%">
                  1
                </th>
                <td className="fw-normal" width="15%">
                  <img src={item.image} width={80} />
                </td>
                <td className="fw-normal">{item.name}</td>
                <td className="fw-lighter align-middle" width="20%">
                  <i
                    className="far fa-edit ms-4 pointer text-secondary"
                    onClick={() => navigate(`/update-client/${item.id}`)}
                  ></i>
                  <i
                    className="fas fa-cog ms-4 pointer text-secondary"
                    onClick={() => navigate(`/settings/${item.id}`)}
                  ></i>
                  <i
                    className="fas fa-user-edit ms-4 pointer text-secondary"
                    onClick={() => navigate(`/user-management/${item.id}`)}
                  ></i>
                  <i
                    className="far fa-trash-alt ms-4 pointer text-secondary"
                    onClick={() => {
                      setShow(true);
                      setId(item.id);
                    }}
                  ></i>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <PaginationControl
          page={current}
          total={totalData}
          limit={10}
          changePage={(page, size) => {
            getData(size, page);
            setCurrent(page);
          }}
        />
      </div>

      {/* for modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <p className="fs-4 fw-bold">Confirmation</p>
          <p>Are you sure you want to delete this?</p>
          <div className="d-flex justify-content-center">
            <div
              className="btn bg-blue mx-2 text-white px-4"
              onClick={handleDelete}
            >
              OK
            </div>
            <div
              className="btn bg-blue mx-2 text-white px-4"
              onClick={() => setShow(false)}
            >
              Cancel
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ClientManagement;
