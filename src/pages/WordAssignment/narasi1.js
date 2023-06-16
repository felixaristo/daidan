import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Dropdown, Form, Row } from "react-bootstrap";

const WordAssignment1 = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState("");
  const [kop, setKop] = useState("");
  const [dataDemikian, setDataDemikian] = useState([]);
  const [dataDepartemen, setDataDepartemen] = useState([]);
  const [dataJabatan, setDataJabatan] = useState([]);
  const [dataKop, setDataKop] = useState([]);
  const [dataLogo, setDataLogo] = useState([]);
  const [dataNama, setDataNama] = useState([]);
  const [dataNamaSurat, setDataNamaSurat] = useState([]);
  const [dataNomorSurat, setDataNomorSurat] = useState([]);
  const [dataSelama, setDataSelama] = useState([]);
  const [dataTanggal, setDataTanggal] = useState([]);
  const [dataTempat, setDataTempat] = useState([]);
  const [dataTugas, setDataTugas] = useState([]);

  useEffect(() => {
    fetch("https://apidls.onegml.com/daidan/pilihan_narasi")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataDemikian(data.dataNarasi_1.dataDemikian);
        setDataDepartemen(data.dataNarasi_1.dataDepartemen);
        setDataJabatan(data.dataNarasi_1.dataJabatan);
        setDataKop(data.dataNarasi_1.dataKop);
        setDataLogo(data.dataNarasi_1.dataLogo);
        setDataNama(data.dataNarasi_1.dataNama);
        setDataNamaSurat(data.dataNarasi_1.dataNamaSurat);
        setDataNomorSurat(data.dataNarasi_1.dataNomorSurat);
        setDataSelama(data.dataNarasi_1.dataSelama);
        setDataTanggal(data.dataNarasi_1.dataTanggal);
        setDataTempat(data.dataNarasi_1.dataTempat);
        setDataTugas(data.dataNarasi_1.dataTugas);
      });
  }, []);

  return (
    <>
      <p className="fs-3 fw-bold text-center">Word Assessment 1</p>
      {/* <Row className="mt-4">
        <Col sm={9}>
          <Dropdown className="mt-2">
            <Dropdown.Toggle
              variant="none"
              className="w-100 p-4 shadow-lg border-0"
            >
              {kop ? (
                <img src={kop} width="auto" height={140} />
              ) : (
                "Choose Here"
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100 text-center">
              {dataKop.map((item) => (
                <Dropdown.Item
                  id={item}
                  onClick={(e) =>
                    setKop(e.target.id ? e.target.id : e.target.src)
                  }
                >
                  <img
                    src={item}
                    width="auto"
                    height={140}
                    className="border border-dark"
                  />
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={3}>
          <Dropdown className="mt-2">
            <Dropdown.Toggle
              variant="none"
              className="w-100 p-4 shadow-lg border-0"
            >
              {logo ? (
                <img src={logo} width="auto" height={80} />
              ) : (
                "Choose here"
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100 text-center">
              {dataLogo.map((item) => (
                <Dropdown.Item
                  id={item}
                  onClick={(e) =>
                    setLogo(e.target.id ? e.target.id : e.target.src)
                  }
                >
                  <img src={item} width="auto" height={80} />
                  <div className="border-bottom border-2 border-secondary my-2" />
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row> */}
      <Card className="mt-3 border-0 shadow-lg p-3">
        <div className="d-flex justify-content-center">
          <Form.Select className="mt-2 w-40 text-center" size="lg">
            {dataNamaSurat.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <span className="mt-2 me-2">No.</span>
          <Form.Select className="w-15">
            {dataNomorSurat.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <p className="mt-5">Saya yang bertandatangan di bawah ini,</p>
        <Row className="mt-2">
          <Col sm={3}>
            <p>Nama</p>
            <p>Jabatan</p>
            <p>Departemen</p>
          </Col>
          <Col sm={9}>
            <div className="d-flex">
              <span className="me-2">:</span>
              <Form.Select className="w-25" size="sm">
                {dataNama.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
            <div className="d-flex mt-2">
              <span className="me-2">:</span>
              <Form.Select className="w-25" size="sm">
                {dataJabatan.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
            <div className="d-flex mt-2">
              <span className="me-2">:</span>
              <Form.Select className="w-25" size="sm">
                {dataDepartemen.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>
        <p className="mt-4">Dengan ini memberikan tugas kepada:</p>
        <Row className="mt-2">
          <Col sm={3}>
            <p>Nama</p>
            <p>Jabatan</p>
            <p>Departemen</p>
          </Col>
          <Col sm={9}>
            <div className="d-flex">
              <span className="me-2">:</span>
              <Form.Select className="w-25" size="sm">
                {dataNama.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
            <div className="d-flex mt-2">
              <span className="me-2">:</span>
              <Form.Select className="w-25" size="sm">
                {dataJabatan.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
            <div className="d-flex mt-2">
              <span className="me-2">:</span>
              <Form.Select className="w-25" size="sm">
                {dataDepartemen.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>
        <div className="d-flex mt-4">
          <span className="me-2">Untuk melaksanakan tugas</span>
          <Form.Select className="w-25" size="sm">
            {dataTugas.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <span className="mx-2">di</span>
          <Form.Select className="w-15" size="sm">
            {dataTempat.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <span className="mx-2">selama</span>
          <Form.Select className="w-20" size="sm">
            {dataSelama.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex mt-2">
          <span className="me-2">terhitung sejak tanggal</span>
          <Form.Select className="w-20" size="sm">
            {dataTanggal.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <span className="mx-2">sampai dengan</span>
          <Form.Select className="w-20" size="sm">
            {dataTanggal.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex mt-4">
          <span className="me-2">Demikian</span>
          <Form.Select className="w-25" size="sm">
            {dataDemikian.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <span className="mx-2">
            ini dikeluarkan untuk dapat dilaksanakan dengan baik dan penuh
            tanggung jawab.
          </span>
        </div>
        <div className="d-flex mt-5">
          <span className="me-2">Jakarta, </span>
          <Form.Select className="w-20" size="sm">
            {dataTanggal.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <div className="my-5"></div>
        <Form.Select className="w-20 mt-2" size="sm">
          {dataNama.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Form.Select>
        <Form.Select className="w-20 mt-2" size="sm">
          {dataJabatan.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Form.Select>
      </Card>
      <div className="d-flex justify-content-between mt-3">
        <div className="w-10"></div>
        <div className="border w-25 bg-danger p-2 text-white text-center">
          01:30
        </div>
        <button
          className="btn btn-success p-2 w-10"
          onClick={() => navigate("/word-assignment-2")}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default WordAssignment1;
