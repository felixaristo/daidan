import React, { useEffect, useState } from "react";
import { Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import { dataDepartemen, dataFontsize } from "../../assets/Dummy";
import Table from "../../components/TableRows";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const WordAssignment2 = () => {
  const navigate = useNavigate();
  const [dataEntitas, setDataEntitas] = useState([]);
  const [dataJabatan, setDataJabatan] = useState([]);
  const [dataJumlahKaryawan, setDataJumlahKaryawan] = useState([]);
  const [dataNamaPanitia, setDataNamaPanitia] = useState([]);
  const [dataNamaSurat, setDataNamaSurat] = useState([]);
  const [dataTanggal, setDataTanggal] = useState([]);
  const [dataTanggalPengajuan, setDataTanggalPengajuan] = useState([]);
  const [dataTempat, setDataTempat] = useState([]);
  const [dataTotalJumlahKaryawan, setDataTotalJumlahKaryawan] = useState([]);
  const [rowsPanitia, setRowsPanitia] = useState([]);

  const addRowPanitia = () => {
    const data = {
      id: nanoid(),
      name: "",
    };
    setRowsPanitia([...rowsPanitia, data]);
  };
  const removeRowPanitia = (index) => {
    const dataRow = [...rowsPanitia];
    dataRow.splice(index, 1);
    setRowsPanitia(dataRow);
  };
  const updateRowPanitia = (i, event) => {
    const { name, value } = event.target;
    const data = [...rowsPanitia];
    data[i][name] = value;
    setRowsPanitia(data);
  };

  const setBoldTitle = () => {
    const isMobileVersion = document.getElementsByClassName("mystyletitle");
    if (isMobileVersion.length > 0) {
      document.getElementById("title").style.fontWeight = "normal";
      document.getElementById("btn-title").innerHTML = "Set Bold";
      const element = document.getElementById("title");
      element.classList.remove("mystyletitle");
    } else {
      document.getElementById("title").style.fontWeight = "bold";
      document.getElementById("btn-title").innerHTML = "Unbold";
      const element = document.getElementById("title");
      element.classList.add("mystyletitle");
    }
  };

  const setBoldPanitia = (id) => {
    const isMobileVersion = document.getElementsByClassName("mystyle-" + id);
    if (isMobileVersion.length > 0) {
      document.getElementById(id).style.fontWeight = "normal";
      document.getElementById("panitia-" + id).innerHTML = "Set Bold";
      const element = document.getElementById(id);
      element.classList.remove("mystyle-" + id);
    } else {
      document.getElementById(id).style.fontWeight = "bold";
      document.getElementById("panitia-" + id).innerHTML = "Unbold";
      const element = document.getElementById(id);
      element.classList.add("mystyle-" + id);
    }
  };

  useEffect(() => {
    fetch("https://apidls.onegml.com/daidan/pilihan_narasi")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataEntitas(data.dataNarasi_2.dataEntitas);
        setDataJabatan(data.dataNarasi_2.dataJabatan);
        setDataJumlahKaryawan(data.dataNarasi_2.dataJumlahKaryawan);
        setDataNamaPanitia(data.dataNarasi_2.dataNamaPanitia);
        setDataNamaSurat(data.dataNarasi_2.dataNamaSurat);
        setDataTanggal(data.dataNarasi_2.dataTanggal);
        setDataTanggalPengajuan(data.dataNarasi_2.dataTanggalPengajuan);
        setDataTempat(data.dataNarasi_2.dataTempat);
        setDataTotalJumlahKaryawan(data.dataNarasi_2.dataTotalJumlahKaryawan);
      });
  }, []);

  return (
    <>
      <p className="fs-3 fw-bold text-center">Word Assessment 2</p>
      <Card className="border-0 shadow-lg p-4 scroll-card overflow-auto">
        Instruksi: <br />
        1. Buatlah nama surat dengan size 14 dan di- bold. <br />
        2. Kegiatan akan dilakukan pada tanggal 21-22 Juli 2023 di Hotel
        Intercontinental Bandung, Jawa Barat. <br />
        3. Hitung dan isi total jumlah karyawan. <br />
        4. Buatlah tabel sebanyak jumlah entitas di Daidan Group, berikan kolom
        nomor, nama entitas dan jumlah karyawan masing-masing entitas. <br />
        5. Isi dengan nama-nama entitas sesuai abjad beserta jumlah karyawan
        masing-masing entitas. <br />
        6. Entitas yang jumlah karyawannya {">"}
        35 karyawan diberi background warna biru muda di seluruh row. <br />
        7. Entitas yang jumlah karyawannya 35 atau kurang, diberi background
        warna merah muda di seluruh row dan di- bold. <br />
        8. Buatlah list dengan tanda • untuk nama-nama panitia berdasarkan
        abjad, nama panitia wanita di- bold. <br />
        9. Pemohon mengajukan proposal ini pada tanggal terakhir bulan Februari
        2023. <br />
        10. Jabatan Pemohon adalah HCBP Specialist. <br />
        <br />
        Nama-nama Entitas: <br />
        Daidan Group PT Galley Adhika Arnawama (GAA) : 55 karyawan <br />
        PT Ataba Group Indonesia (ATGI) : 15 karyawan <br />
        PT Adhika Arnawama Agensi (AAA) : 35 karyawan <br />
        PT Daidan Aditama Yaksa (DAYA) : 187 karyawan <br />
        PT Kemala Shipping (KS) : 14 karyawan <br />
        PT Anaga Group Indonesia (AGI) : 25 karyawan <br />
        PT Kintoki Sea Logistics (KSL) : 7 karyawan <br />
        PT Mitrabahtera Segara Sejati Tbk : 189 karyawan <br />
        PT Anaga Shipping Indonesia (ASI) : 27 karyawan <br />
        PT Daidan Group Indonesia (DGI) : 46 karyawan <br />
        PT Heroez Sinar Sanjaya : 12 karyawan <br />
        PT Onic Sinar Sanjaya : 32 karyawan <br />
        PT Mitra Alam Segara Sejati : 11 karyawan <br />
        PT Anaga Abyudaya Ananta (AAB) : 47 karyawan <br />
        <br />
        Nama-nama panitia: <br />
        Sandy, Cecillia, Haris, Budi, Cahya, Firman, Indah, Devi, Fara,
        Zulkarnaen, Tantri, Julia, Ida, Dandy, Russel, Bambang
      </Card>
      <Card className="border-0 shadow-lg p-4 mt-3">
        <p>
          Kepada Yth. <br />
          Management DAIDAN GROUP <br />
          Di <br />
          Tempat
        </p>
        <div className="d-flex justify-content-center">
          <Form.Select
            className="w-70 text-center"
            id="title"
            onChange={() =>
              (document.getElementById("title").style.fontWeight = "normal")
            }
          >
            {dataNamaSurat.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
          id="btn-title"
            className="btn btn-dark fs-7 ms-2 w-10"
            onClick={() =>
              setBoldTitle()
            }
          >
            Set Bold
          </button>
          <Dropdown className="ms-2">
            <Dropdown.Toggle variant="dark" className="fs-7">
              Set Font Size
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100 text-center">
              {dataFontsize.map((item) => (
                <Dropdown.Item
                  onClick={() =>
                    (document.getElementById("title").style.fontSize =
                      item + "pt")
                  }
                >
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <p className="mt-4">Dengan hormat,</p>
        <p>
          Bersama ini kami dari Divisi Human Capital & Community Relations
          bermaksud untuk mengajukan proposal kegiatan employee engagement yang
          akan diselenggarakan pada:
        </p>
        <Row className="mt-2 ms-5">
          <Col sm={3}>
            <p>Tanggal</p>
            <p>Lokasi</p>
            <p>Jumlah Karyawan</p>
          </Col>
          <Col sm={9}>
            <div className="d-flex">
              <span className="me-2">:</span>
              <Form.Select className="w-50" size="sm">
                {dataTanggal.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
            <div className="d-flex mt-2">
              <span className="me-2">:</span>
              <Form.Select className="w-50" size="sm">
                {dataTempat.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
            <div className="d-flex mt-2">
              <span className="me-2">:</span>
              <Form.Select className="w-50" size="sm">
                {dataJumlahKaryawan.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>

        <Table data={dataEntitas} />

        <div className="ms-5 mt-3">
          <p>Nama-nama panitia:</p>
          <ul className="ms-5">
            {rowsPanitia.map((item, index) => (
              <li>
                <div className="d-flex mt-2">
                  <Form.Select
                    className="w-25"
                    size="sm"
                    id={item.id}
                    onChange={() =>
                      (document.getElementById(item.id).style.fontWeight =
                        "normal")
                    }
                  >
                    {dataNamaPanitia.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </Form.Select>
                  <button
                    className="btn btn-dark px-3 ms-2"
                    onClick={() => removeRowPanitia(index)}
                  >
                    -
                  </button>
                  <button
                    id={"panitia-" + item.id}
                    className="btn btn-dark fs-7 ms-2"
                    onClick={() => setBoldPanitia(item.id)}
                  >
                    Set Bold
                  </button>
                </div>
              </li>
            ))}
            <button
              className="btn btn-danger px-3 w-25 mt-2"
              onClick={addRowPanitia}
            >
              +
            </button>
          </ul>
        </div>
        <p className="mt-4">
          Demikian proposal ini kami buat. Besar harapan agar Manajemen dapat
          memberikan persetujuan terhadap kegiatan ini.
        </p>
        <div className="d-flex mt-4">
          <span className="me-2">Jakarta, </span>
          <Form.Select className="w-20" size="sm">
            {dataTanggalPengajuan.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
        </div>
        <div className="my-5"></div>
        <span className="text-decoration-underline">Tanto Wahyu</span>
        <Form.Select className="w-20 mt-2" size="sm">
          {dataJabatan.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Form.Select>
      </Card>
      <div className="d-flex justify-content-between mt-3">
        <div className="w-10"></div>
        <div className="border w-25 bg-danger p-2 text-white text-center">
          07:00
        </div>
        <button
          className="btn btn-success p-2 w-10"
          onClick={() => navigate("/thankyou")}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default WordAssignment2;
