
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap';
import './RegistrationStyle.css'
import { Link, useHistory } from 'react-router-dom';

const RegPage = (props: any) => {
  const history = useHistory();

  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const nextPageHandler = props.nextPageHandler;

  function sendToDB(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let toSend = {
      firstName: userFirstname,
      lastName: userLastname,
      username: userName,
      password: userPass,
      email: userEmail
    };

    if (userFirstname === '' || userLastname === '' || userName === '' || userPass === '' || userEmail === '') {
      alert("Please fill out all parts of the form!");
      return;
    }

    if (!userEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      alert("Invalid Email format!");
      return;
    }

    if (userPass.length < 4 || userName.length < 4) {
      alert("Username and/ord Password is too short, needs to be more than 4 characters!")
      return;
    }

    let json = JSON.stringify(toSend);


    console.log("POST WITH AXIOS! Sending: " + json);

    axios.post<string, { data: { successful: boolean, message: string } }>(
      'http://localhost:8080/register',
      json,

      { headers: { 'Content-Type': "application/json" } }).then(
        res => {
          alert(res.data.message);
          if (res.data.successful) {
            props.nextPageHandler("");
            history.push("");
          }
        })
      .catch((err) => {
        console.log({ err });
        alert("Error: " + err.response);
      });
  }

  return (
    <div className="container custom fade-in">
      <div className="d-flex justify-content-center align-items-center h-50">

        <div className="card text-black" id="regcard">
          <div className="card-body">
            <div className="justify-content-center">
              <p className="text-center h1">Sign up</p>

              <form className="" onSubmit={(e) => sendToDB(e)}>

                <div className="inputStyle">
                  <label>First Name</label>
                  <input type="text" id="" className="test" value={userFirstname} onChange={(e: any) => { setUserFirstname(e.target.value) }} />

                </div>

                <div className="inputStyle">
                  <label>Last Name</label>
                  <input type="text" id="" className="test" value={userLastname} onChange={(e: any) => { setUserLastname(e.target.value) }} />

                </div>

                <div className="inputStyle">
                  <label className="">Username</label>
                  <input type="text" id="" className="test" value={userName} onChange={(e: any) => { setUserName(e.target.value) }} />

                </div>

                <div className="inputStyle">
                  <label className="">Password</label>
                  <input type="password" id="" className="test" value={userPass} onChange={(e: any) => { setUserPass(e.target.value) }} />

                </div>

                <div className="inputStyle">
                  <label className="">Email</label>
                  <input type="email" id="" className="test" value={userEmail} onChange={(e: any) => { setUserEmail(e.target.value) }} />
                </div>

                <div className="d-flex justify-content-center buttons">
                  <Button className="butt-pads" variant="outline-secondary" onClick={() => { nextPageHandler("Login"); history.push("/") }}>Back to Login</Button>
                  <Button className="butt-pads" variant="outline-primary" type="submit">Create Account</Button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RegPage;