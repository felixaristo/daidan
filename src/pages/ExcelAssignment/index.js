import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion, Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Default from "../../components/Excel";
import Excel from "../../components/Excel";

const ExcelAssignment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    var els = document.getElementsByTagName("div");
    var l = els.length;
    for (var i = 0; i < l; i++) {
      if (els[i].style.background == "#EEF2FF") {
        // els[i].parentNode.removeChild(els[i]);
        els[i].innerHTML = "tes";
      }
    }
  }, []);

  return (
    <>
      <p className="fs-2 fw-bold text-center">Excel Assessment</p>
      <Excel />
    </>
  );
};

export default ExcelAssignment;
