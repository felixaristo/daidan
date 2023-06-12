import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/Cover Login-05.jpg";
import logo from "../../assets/ONE-GML-DLS.png";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (form.username === "user") {
      localStorage.setItem("name", "User");
      navigate("/");
    } else if (form.username === "admin") {
      localStorage.setItem("name", "Admin");
      navigate("/admin");
    } else {
      alert("error");
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col card border-0">
            <div className="col-lg-10 my-auto mx-auto">
              <img className="d-flex mx-auto" src={logo} width={250} />
              <p className="text-center fs-3 fw-bold mt-2">Assignment Test</p>
              <div class="form-group w-100 mt-4">
                {/* <label>Username:</label> */}
                <input
                  type="text"
                  name="username"
                  className="form-control mt-1 border-bottom border-0"
                  placeholder="username"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group w-100 mt-2">
                {/* <label>Password:</label> */}
                <input
                  type="password"
                  name="password"
                  className="form-control mt-1 border-bottom border-0"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <button
                className="btn btn-success p-2 w-100 mt-3"
                onClick={handleSubmit}
              >
                Login
              </button>
              <p className="text-center mt-4 text-xs">
                Copyright © Digital Learning Solutions 2023.
                <br />
                All rights reserved. v 1.0.0
              </p>
            </div>
          </div>

          <div className="col px-0 d-none d-sm-block">
            <img
              alt=""
              src={img}
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
