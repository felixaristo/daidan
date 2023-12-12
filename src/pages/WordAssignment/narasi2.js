import React, { useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
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
  const [show, setShow] = useState(false);

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
      document.getElementById("panitiaBold-" + id).innerHTML = "Set Bold";
      const element = document.getElementById(id);
      element.classList.remove("mystyle-" + id);
    } else {
      document.getElementById(id).style.fontWeight = "bold";
      document.getElementById("panitiaBold-" + id).innerHTML = "Unbold";
      const element = document.getElementById(id);
      element.classList.add("mystyle-" + id);
    }
  };

  const setItalicPanitia = (id) => {
    const isMobileVersion = document.getElementsByClassName("mystyle1-" + id);
    if (isMobileVersion.length > 0) {
      document.getElementById(id).style.fontStyle = "normal";
      document.getElementById("panitiaItalic-" + id).innerHTML = "Set Italic";
      const element = document.getElementById(id);
      element.classList.remove("mystyle1-" + id);
    } else {
      document.getElementById(id).style.fontStyle = "italic";
      document.getElementById("panitiaItalic-" + id).innerHTML = "Unitalic";
      const element = document.getElementById(id);
      element.classList.add("mystyle1-" + id);
    }
  };

  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Card className="border-0 shadow-lg p-4 scroll-card overflow-auto">
          <b>Instruksi:</b>
          <ol>
            <li>Buatlah nama surat dengan size 14 dan di-bold.</li>
            <li>
              Kegiatan akan dilakukan pada tanggal 21-22 Juli 2023 di Hotel
              Intercontinental Bandung, Jawa Barat.
            </li>
            <li>Hitung dan isi total jumlah karyawan.</li>
            <li>
              Buatlah tabel sebanyak jumlah entitas di Daidan Group, berikan
              kolom nomor, nama entitas dan jumlah karyawan masing-masing
              entitas.
            </li>
            <li>
              Isi dengan nama-nama entitas sesuai abjad beserta jumlah karyawan
              masing-masing entitas.
            </li>
            <li>
              Entitas yang jumlah karyawannya {">"} 35 karyawan diberi
              background warna biru muda di seluruh row.
            </li>
            <li>
              Entitas yang jumlah karyawannya 35 atau kurang, diberi background
              warna merah muda di seluruh row dan di-bold.
            </li>
            <li>
              Buatlah list nama-nama panitia berdasarkan abjad, nama panitia
              wanita di-bold dan laki-laki di-italic.
            </li>
            <li>
              Pemohon mengajukan proposal ini pada tanggal terakhir bulan
              Februari 2023.
            </li>
            <li>Jabatan Pemohon adalah HCBP Specialist</li>
          </ol>
          <br />
          <b>Nama-nama Entitas Daidan Group:</b>
          PT Suka Senang Bersama : 55 karyawan
          <br />
          PT Ada Asa Ada Rasa : 15 karyawan
          <br />
          PT Ayo Kita Bangkit Bersama : 35 karyawan
          <br />
          PT Kawan Baru Jaya : 187 karyawan
          <br />
          PT Gerhana Matahari Bulan : 32 karyawan
          <br />
          PT Inti Layar Jaya Maju : 11 karyawan
          <br />
          PT Bisa Maju Sejahtera : 14 karyawan
          <br />
          PT Berlayar Terus Sentosa : 25 karyawan
          <br />
          PT Mitra Samudera Sejahtera : 7 karyawan
          <br />
          PT Selamat Sentosa Berjaya : 189 karyawan
          <br />
          PT Terang Terus Terang Selamanya : 27 karyawan
          <br />
          PT Ceria Bersama Kami : 46 karyawan
          <br />
          PT Fast and Furious Abadi : 12 karyawan
          <br />
          PT Jaya Selalu Berlayar : 47 karyawan
          <br />
          <br />
          <b>Nama-nama panitia:</b>
          Wanita: Cecillia, Cahya, Indah, Devi, Fara, Tantri, Julia, Ida <br />
          Pria: Sandy, Haris, Budi, Firman, Zulkarnaen, Dandy, Russel, Bambang
        </Card>
      </Modal>
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
            onClick={() => setBoldTitle()}
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
          bermaksud untuk mengajukan proposal kegiatan{" "}
          <i>Employee Engagement</i> yang akan diselenggarakan pada:
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
                {dataTotalJumlahKaryawan.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Select>
            </div>
          </Col>
        </Row>

        <Table data={dataEntitas} />

        <div className="ms-5 mt-3">
          <p>Nama-nama panitia:</p>
          <ol className="ms-5">
            {rowsPanitia.map((item, index) => (
              <li>
                <div className="d-flex mt-2 ms-1">
                  <Form.Select className="w-25" size="sm" id={item.id}>
                    {dataNamaPanitia.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </Form.Select>
                  <button
                    className="btn btn-dark px-3 ms-2"
                    onClick={() => removeRowPanitia(index)}
                  >
                    Delete Row
                  </button>
                  <button
                    id={"panitiaBold-" + item.id}
                    className="btn btn-dark fs-7 ms-2"
                    onClick={() => setBoldPanitia(item.id)}
                  >
                    Set Bold
                  </button>
                  <button
                    id={"panitiaItalic-" + item.id}
                    className="btn btn-dark fs-7 ms-2"
                    onClick={() => setItalicPanitia(item.id)}
                  >
                    Set Italic
                  </button>
                </div>
              </li>
            ))}
            <button
              className="btn btn-danger px-3 w-25 mt-2"
              onClick={addRowPanitia}
              disabled={rowsPanitia.length === 16}
            >
              Add Row
            </button>
          </ol>
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
      <Button className="d-flex justify-content-end">Buka</Button>
    </>
  );
};

export default WordAssignment2;
