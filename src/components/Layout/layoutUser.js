import React from "react";
import { Dropdown } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/ONE-GML-DLS.png";

const LayoutUser = ({ children }) => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name")

  return (
    <div className="vh-100">
      <div className="header d-flex p-4 border shadow rounded-3">
        <img alt="" src={logo} width={150}></img>
        <div className="d-flex justify-content-end mt-2 ms-auto">
          <Dropdown>
            <Dropdown.Toggle className="d-flex" variant="none">
              <i class="far fa-user-circle fs-4"></i>
              <span className="ms-2">{name}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate("/login");
                  localStorage.clear();
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="container">
        <div className="card p-5 shadow-lg border-0 mt-3 h-100">
          {children} <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
