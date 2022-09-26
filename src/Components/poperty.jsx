import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

function Property(props) {
  const [enable, setEnable] = useState(false);
  const [startdate, setStartdate] = useState();
  const [enddate, setEnddate] = useState();

  function handleChage(data, startdate, enddate) {
    console.log(startdate);

    const reqBody = {
      property: data,
      price: data.price,
      startDate: startdate,
      endDate: enddate,
    };
    console.log("body", reqBody);
    axios
      .post("http://localhost:5000/booking", reqBody, {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      })
      .then((Response) => {
        console.log(Response);
      });
  }

  return (
    <div className="container">
      <span className="field">{props.index}</span>
      <span className="field">{props.city}</span>
      <span className="field1">{props.address}</span>
      <span className="field">{props.bhk}</span>
      <span className="field">{props.price}</span>
      <Button className={"field"} onClick={() => setEnable(true)}>
        Book
      </Button>
      {enable && (
        <input
          type="date"
          data-date=""
          data-date-format="DD MM YYYY"
          placeholder="Start Date"
          className="field"
          onChange={(event) => setStartdate(event.target.value)}
        ></input>
      )}
      {enable && (
        <input
          type="Date"
          data-date=""
          data-date-format="DD MM YYYY"
          placeholder="End Date"
          className="field"
          onChange={(event) => setEnddate(event.target.value)}
        ></input>
      )}
      {enable && (
        <Button
          className="btn btn-success"
          type="submit"
          onClick={(event) => {
            handleChage(props.data, startdate, enddate);
          }}
        >
          Submit
        </Button>
      )}
    </div>
  );
}

export default Property;
