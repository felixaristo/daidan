import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import OpeningWordMC from "./pages/WordAssignment/openingMC";
import OpeningWordAssignment from "./pages/WordAssignment/openingAssignment";
import Assignment from "./pages/Quiz/assignment";
import Thankyou from "./pages/Thankyou";
import Admin from "./pages/Admin/admin";
import Score from "./pages/Admin/score";
import ExcelAssignment from "./pages/ExcelAssignment";
import OpeningAssignment from "./pages/ExcelAssignment/opening";
import WordAssignment1 from "./pages/WordAssignment/narasi1";
import WordAssignment2 from "./pages/WordAssignment/narasi2";
import Upload from "./pages/ExcelAssignment/upload";
import Quiz from "./pages/Quiz";
import LayoutUser from "./components/Layout/layoutUser";
import LayoutAdmin from "./components/Layout/layoutAdmin";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/Dashboard/UserManagement";
import ClientManagement from "./pages/Dashboard/ClientManagement";
import UpdateUser from "./pages/Dashboard/UserManagement/updateUser";
import AddUser from "./pages/Dashboard/UserManagement/addUser";
import UpdateClient from "./pages/Dashboard/ClientManagement/updateClient";
import AddClient from "./pages/Dashboard/ClientManagement/addClient";
import UpdatePIC from "./pages/Dashboard/ClientManagement/updatePIC";
import AddPIC from "./pages/Dashboard/ClientManagement/addPIC";
import Settings from "./pages/Dashboard/Settings";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <RequireAuth>
            <LayoutUser />
          </RequireAuth>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/opening-word-mc" element={<OpeningWordMC />} />
        <Route
          path="/opening-word-assignment"
          element={<OpeningWordAssignment />}
        />
        <Route path="/question-1" element={<Quiz />} />
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
      <Route
        element={
          <RequireAuth>
            <LayoutAdmin />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-management/:id" element={<UserManagement />} />
        <Route path="/add-user/:id" element={<AddUser />} />
        <Route path="/update-user/:id/:id2" element={<UpdateUser />} />
        <Route path="/client-management" element={<ClientManagement />} />
        <Route path="/add-client" element={<AddClient />} />
        <Route path="/update-client/:id" element={<UpdateClient />} />
        <Route path="/add-pic/:id" element={<AddPIC />} />
        <Route path="/update-pic/:id/:id2" element={<UpdatePIC />} />
        <Route path="/settings/:id" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
