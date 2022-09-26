import React from "react";
import MyProp from "./myProp";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function MyProperty() {
  const [myProperty, setMyProperty] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/property/myusers", {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      })
      .then((Response) => setMyProperty(Response.data));
  }, []);
  console.log(myProperty);
  return (
    <div>
      <div className="container head">
        <span className="field center">No.</span>
        <span className="field center">City</span>
        <span className="field1 center">Address</span>
        <span className="field center">BHK</span>
        <span className="field center">Price</span>
      </div>
      {myProperty.map((data, index) => {
        return (
          <MyProp
            index={index + 1}
            city={data.city}
            address={data.address}
            price={data.price}
            bhk={data.bhk}
          ></MyProp>
        );
      })}
    </div>
  );
}

export default MyProperty;
