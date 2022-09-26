import React from "react";
import "../App.css";

function Bookings(props) {
  return (
    <div className="container">
      <span className="field">{props.index}</span>
      <span className="field">{props.city}</span>
      <span className="field1">{props.address}</span>
      <span className="field">{props.bhk}</span>
      <span className="field">{props.price}</span>
      <span className="field1">{props.start}</span>
      <span className="field1">{props.end}</span>
    </div>
  );
}

export default Bookings;
