import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import OpeningWordMC from "./pages/WordAssignment/openingMC";
import OpeningWordAssignment from "./pages/WordAssignment/openingAssignment";
import Question1 from "./pages/Quiz/question1";
import Question2 from "./pages/Quiz/question2";
import Assignment from "./pages/Quiz/assignment";
import Thankyou from "./pages/Thankyou";
import Admin from "./pages/Admin/admin";
import Score from "./pages/Admin/score";
import ExcelAssignment from "./pages/ExcelAssignment";
import OpeningAssignment from "./pages/ExcelAssignment/opening";
import WordAssignment1 from "./pages/WordAssignment/narasi1";
import WordAssignment2 from "./pages/WordAssignment/narasi2";
import Upload from "./pages/ExcelAssignment/upload";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/opening-word-mc" element={<OpeningWordMC />} />
        <Route
          path="/opening-word-assignment"
          element={<OpeningWordAssignment />}
        />
        <Route path="/question-1" element={<Question1 />} />
        <Route path="/question-2" element={<Question2 />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/word-assignment" element={<WordAssignment1 />} />
        <Route path="/word-assignment-2" element={<WordAssignment2 />} />
        <Route path="/opening-word-excel" element={<OpeningAssignment />} />
        <Route path="/excel-assignment" element={<ExcelAssignment />} />
        <Route path="/excel-upload" element={<Upload />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/score" element={<Score />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
