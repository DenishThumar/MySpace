import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [enable, setEnable] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const reqBody = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:5000/signin", reqBody).then((response) => {
      //console.log(response);
      let token = response.data.token;
      console.log(token);
      if (token !== null) {
        localStorage.setItem("jwtToken", "Bearer ".concat(token));
        setEnable(false);
        navigate("/searchProperty");
      } else {
        console.log("Not logged in");
        setEnable(true);
      }
    });
  }

  return (
    <div className="Login" style={{ padding: 60 }}>
      <Form style={{ margin: "auto", maxWidth: 320 }} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <br></br>
        {enable && <span style={{ color: "red" }}>Bad Credentials</span>}

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
          Login
        </Button>

        <Button
          className="btn m-3"
          block="true"
          size="lg"
          type="button"
          onClick={() => {
            navigate("/register");
          }}
        >
          Signup
        </Button>
      </Form>
    </div>
  );
}
