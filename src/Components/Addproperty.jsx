import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function AddProperty() {
  const [City, setCity] = useState("");
  const [Bhk, setBhk] = useState("");
  const [Address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  function validateForm() {
    return City.length > 0 && Address.length > 0 && price.length > 0 && Bhk > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const reqBody = {
      city: City,
      bhk: Bhk,
      address: Address,
      price: price,
      available: true,
    };

    console.log(localStorage.getItem("jwtToken"));

    // const header = {
    //     Authorization: localStorage.getItem("jwtToken"),
    // };
    // console.log(header);
    axios
      .post("http://localhost:5000/property", reqBody, {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      })
      .then((response) => {
        console.log("response ", response);
      });
  }

  return (
    <>
      <div className="AddProperty" style={{ padding: 60 }}>
        <Form style={{ margin: "auto", maxWidth: 320 }} onSubmit={handleSubmit}>
          <h2>Add Property</h2>
          <br />
          <Form.Group size="lg" controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control
              autoFocus
              type="City"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="Bhk">
            <Form.Label>Bhk</Form.Label>
            <Form.Control
              autoFocus
              type="Bhk"
              value={Bhk}
              onChange={(e) => setBhk(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              autoFocus
              type="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Button
            className="btn m-3"
            block="true"
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Add
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddProperty;
