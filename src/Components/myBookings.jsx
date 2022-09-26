import React from "react";
import Bookings from "./bookings";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function MyBooking() {
  const [myBookings, setMyBookings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/booking/myBookings", {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      })
      .then((Response) => setMyBookings(Response.data));
  }, []);
  console.log("myBookings", myBookings);
  return (
    <div>
      {myBookings.map((data, index) => {
        return (
          <Bookings
            index={index + 1}
            city={data.property.city}
            address={data.property.address}
            price={data.price}
            bhk={data.property.bhk}
            start={data.startDate}
            end={data.endDate}
          ></Bookings>
        );
      })}
    </div>
  );
}

export default MyBooking;
