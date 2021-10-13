import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dispatch, SetStateAction, useState } from "react";
import '../Registration/RegistrationStyle.css';

interface LoginProps {
  nextPageHandler: (nextPage:string) => void;
  username:string;
  setUsername:Dispatch<SetStateAction<string>>;
  loggedIn:boolean;
  setLoggedIn:Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = (props:any)  => {

  const [password, setPassword] = useState("");

  const validateForm = () => {
    return props.username.length > 0 && password.length > 0;
  };

  const tryLogin = () => {
    console.log("Tried logging in! Username = " + props.username + ", Password = " + password);
    const successful = true;
    if (successful) {
      props.setLoggedIn(true);
      props.nextPageHandler("Home");
    } else {
      alert("Incorrect username or password!");
    }
  }

  return (<Container className="form-container custom fade-in">
    <div className="d-flex justify-content-center align-items-center h-50">

      <div className="card text-black">
        <div className="card-body">
          <div className="justify-content-center">
            <p className="text-center h1">Welcome</p>

            <Form onSubmit={() => tryLogin()}>
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
            <Button size="sm" variant="outline-dark" onClick={() => props.nextPageHandler("Registration")}>
              Sign Up
            </Button>

          </div></div></div></div>
  </Container>
  );
};


export type {LoginProps};
export default Login;
