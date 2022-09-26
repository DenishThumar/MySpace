import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Property from "./poperty";

function SearchProperty() {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [dataState, setDataState] = useState([]);
  const [searchstate, setSearchstate] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/property", {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      })
      .then((Response) => setDataState(Response.data));
  }, []);
  // useEffect(() => {
  //   console.log("SearchState", searchstate);
  //   console.log("DataState", dataState);
  // }, [searchstate, dataState]);

  useEffect(() => {
    const temp = dataState.filter(
      (data) =>
        data.city.toLowerCase().includes(city.toLowerCase()) &&
        data.price <= price &&
        data.available == true
    );

    setSearchstate(temp);
  }, [dataState, city, price]);

  return (
    <div>
      <input
        placeholder="City"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      ></input>
      <input
        placeholder="Price"
        type="string"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      ></input>
      {searchstate.map((data, index) => {
        return (
          <Property
            index={index + 1}
            city={data.city}
            address={data.address}
            price={data.price}
            bhk={data.bhk}
            data={data}
          ></Property>
        );
      })}
    </div>
  );
}

export default SearchProperty;
