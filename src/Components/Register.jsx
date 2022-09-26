import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 7 && name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const reqBody = {
      name: name,
      email: email,
      password: password,
    };
    console.log(reqBody);
    axios.post("http://localhost:5000/users", reqBody).then((response) => {
      console.log(response);
    });
    navigate("/");
  }

  return (
    <div className="Register" style={{ padding: 60 }}>
      <Form style={{ margin: "auto", maxWidth: 320 }} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <br />
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          className="btn m-3"
          block="true"
          size="lg"
          type="submit"
          disabled={!validateForm()}
        >
          SignUp
        </Button>
      </Form>
    </div>
  );
}

export default Register;
