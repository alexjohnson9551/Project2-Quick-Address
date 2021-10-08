import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react-transition-group/node_modules/@types/react";

const Login = (props: any) => {

  return (<Container className="form-container">
    <Form onSubmit={() => {}}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          autoFocus
          type="text"
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
        />
      </Form.Group>
      <br />
      <Button size="lg" type="submit" variant="outline-primary">
        Login
      </Button>

    </Form>
    <br />
    <Button size="sm" variant="outline-dark" onClick={() => props.nextPageHandler("Registration")}>
      Sign Up
    </Button>
  </Container>);
};

export default Login;
