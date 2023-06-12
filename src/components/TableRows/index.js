import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { dataColor } from "../../assets/Dummy";

const Table = ({ data }) => {
  const [rows, setRow] = useState([]);
  const addRowTable = () => {
    const data = {
      id: nanoid(),
      name: "",
      total: "",
    };
    setRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    setRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    setRow(data);
  };

  const setBold = (id) => {
    const isMobileVersion = document.getElementsByClassName(
      "mystyletable-" + id
    );
    if (isMobileVersion.length > 0) {
      document.getElementById(id).style.fontWeight = "normal";
      document.getElementById("total_" + id).style.fontWeight = "normal";
      document.getElementById("btn-" + id).innerHTML = "Set Bold";
      const element = document.getElementById(id);
      element.classList.remove("mystyletable-" + id);
    } else {
      document.getElementById(id).style.fontWeight = "bold";
      document.getElementById("total_" + id).style.fontWeight = "bold";
      document.getElementById("btn-" + id).innerHTML = "Unbold";
      const element = document.getElementById(id);
      element.classList.add("mystyletable-" + id);
    }
  };

  const unsetBold = (id) => {
    document.getElementById(id).style.fontWeight = "normal";
    document.getElementById("total_" + id).style.fontWeight = "normal";
  };

  const setColor = (id, color) => {
    if (color === "Merah Muda") {
      document.getElementById("color_" + id).style.backgroundColor = "#FDCEDF";
    } else if (color === "Biru Muda") {
      document.getElementById("color_" + id).style.backgroundColor = "#C0DBEA";
    } else if (color === "Hijau Muda") {
      document.getElementById("color_" + id).style.backgroundColor = "#DFFFD8";
    }
  };

  return (
    <>
      <table className="table table-bordered mt-4">
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Nama Entitas</th>
            <th>Jumlah</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index} id={"color_" + item.id}>
              <td className="text-center">
                <p>{1}</p>
              </td>
              <td width="40%">
                <Form.Select
                  className="w-100"
                  id={item.id}
                  onChange={() => unsetBold(item.id)}
                >
                  {data.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </Form.Select>
              </td>
              <td>
                <input
                  type="number"
                  // value={email}
                  // onChange={(event) => onValUpdate(index, event)}
                  name="email"
                  className="form-control w-100"
                  id={"total_" + item.id}
                />
              </td>
              <td>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-dark px-3"
                    onClick={() => tableRowRemove(index)}
                  >
                    -
                  </button>
                  <button
                    id={"btn-" + item.id}
                    className="btn btn-dark mx-2 fs-7"
                    onClick={() => setBold(item.id)}
                  >
                    Set Bold
                  </button>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" className="fs-7">
                      Set Color
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="w-100 text-center">
                      {dataColor.map((color) => (
                        <Dropdown.Item onClick={() => setColor(item.id, color)}>
                          {color}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger px-3 w-25" onClick={addRowTable}>
          +
        </button>
      </div>
    </>
  );
};

export default Table;
