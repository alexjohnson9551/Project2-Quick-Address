import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import '../Registration/RegistrationStyle.css';
import { useHistory } from "react-router";
import axios from "axios";

const Login = (props: any) => {

  const history = useHistory();

  const [password, setPassword] = useState("");

  const validateForm = () => {
    return props.username.length > 0 && password.length > 0;
  };

  const tryLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Tried logging in! Username = " + props.username + ", Password = " + password);
    let toSend = {
      username: props.username,
      password: password
    };

    let jsonToSend = JSON.stringify(toSend);

    axios.post<string, {data: {successful: boolean, message: string}}>(
      'http://localhost:8080/login',
      jsonToSend,
      { headers: { 'Content-Type': "application/json" } }).then(
        (res) => {
          alert(res.data.message);
          if (res.data.successful) {
            props.setLoggedIn(true);
            props.nextPageHandler("Home");
            history.push("");
          }
        })
      .catch((err) => {
        console.log({ err });
        alert("Error: " + err.response);
      });
  }

  return (<Container className="form-container custom fade-in">
    <div className="d-flex justify-content-center align-items-center h-50">

      <div className="card text-black" id="logincard">
        <div className="card-body">
          <div className="justify-content-center">
            <p className="text-center h1">Welcome</p>

            <Form onSubmit={(e) => tryLogin(e)}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  value={props.username}
                  onChange={(e) => props.setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button size="lg" type="submit" variant="outline-primary" disabled={!validateForm()}>
                Login
              </Button>

            </Form>
            <br />
            <Button size="sm" variant="outline-dark" onClick={() => { props.nextPageHandler("Registration"); history.push("Registration") }}>
              Sign Up
            </Button>

          </div></div></div></div>
  </Container>
  );
};

export default Login;
