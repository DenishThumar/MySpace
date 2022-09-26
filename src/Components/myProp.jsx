import React from "react";
import "../App.css";

function MyProp(props) {
  return (
    <div className="container">
      <span className="field">{props.index}</span>
      <span className="field">{props.city}</span>
      <span className="field1">{props.address}</span>
      <span className="field">{props.bhk}</span>
      <span className="field">{props.price}</span>
    </div>
  );
}

export default MyProp;
