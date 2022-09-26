import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./Components/login";
import Register from "./Components/Register";
import AddProperty from "./Components/Addproperty";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchProperty from "./Components/Searchproperty";
import MyBooking from "./Components/myBookings";
import MyProperty from "./Components/myProperty";
import NewNavbar from "./Components/newNavbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NewNavbar></NewNavbar>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="addProperty" element={<AddProperty></AddProperty>}></Route>
        <Route path="searchProperty" element={<SearchProperty />}></Route>
        <Route path="myBookings" element={<MyBooking></MyBooking>}></Route>
        <Route path="myProperty" element={<MyProperty></MyProperty>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
