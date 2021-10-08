
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './RegistrationStyle.css'


const Registration = (props: any) => (
  <div>
    Registration Component
    <br />
    <Button onClick={() => props.nextPageHandler("Login")}>Back to Login</Button>
  </div>
);

const RegPage = (props: any) => {
  const propsClick = props.onclick;
  const nextPage = props.nextPage;
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmail, setUserEmail] = useState("");

  let firstnameChangeHandler = (e:any) => {
    setUserFirstname(e.target.value);
    console.log(userFirstname);
  }

  let lastnameChangeHandler = (e:any) => {
    setUserLastname(e.target.value);
    console.log(userLastname);
  }

  let passChangeHandler = (e:any) => {
    setUserPass(e.target.value);
    console.log(userPass);
  }

  let userNameChangeHandler = (e:any) => {
    setUserName(e.target.value);
    console.log(userName);
  }
  
  let emailChangeHandler = (e:any) => {
    setUserEmail(e.target.value);
    console.log(userEmail);
  }

  function funn()
  {
    console.log(userFirstname);
    console.log(userLastname);
    console.log(userName);
    console.log(userPass);
    console.log(userEmail);
  }
  return (
    <div className="container custom">
      <div className="d-flex justify-content-center align-items-center h-50">

        <div className="card text-black">
          <div className="card-body">
            <div className="justify-content-center">
              <p className="text-center h1">Sign up</p>

              <form className="">

                <div className="">
                  <input type="text" id="" className="form-control" value={userFirstname} onChange={firstnameChangeHandler}/>
                  <label className="form-label">First Name</label>
                </div>

                <div className="">
                  <input type="text" id="" className="form-control" value={userLastname} onChange={lastnameChangeHandler}/>
                  <label className="form-label">Last Name</label>
                </div>

                <div className="">
                  <input type="text" id="" className="form-control" value={userName} onChange={userNameChangeHandler}/>
                  <label className="form-label">Username</label>
                </div>

                <div className="">
                  <input type="password" id="" className="form-control" value={userPass} onChange={passChangeHandler}/>
                  <label className="form-label">Password</label>
                </div>

                <div className="">
                  <input type="email" id="" className="form-control" value={userEmail} onChange={emailChangeHandler}/>
                  <label className="form-label">Email</label>
                </div>

                <div className="d-flex justify-content-center">
                  <Button onClick={() => props.nextPageHandler("Login")}>Back to Login</Button>
                  <Button className="btnStyle" onClick={() => funn()} >Create Account</Button>
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
