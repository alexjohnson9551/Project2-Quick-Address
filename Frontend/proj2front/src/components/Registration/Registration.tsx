
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './RegistrationStyle.css'

const RegPage = (props: any) => {
  //const propsClick = props.onclick;
  //const nextPage = props.nextPage;
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const nextPageHandler = props.nextPageHandler;

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

  function sendToDB()
  {
    //Gonna have axios in here and the body should be an obj
    //that has all the user properties
    console.log(userFirstname);
    console.log(userLastname);
    console.log(userName);
    console.log(userPass);
    console.log(userEmail);

    let toSend = {
      method: "POST",
      headers: {"Access-Control-Allow-Origin": "*"},
      firstname: userFirstname,
      lastname: userLastname,
      username: userName,
      password: userPass,
      email: userEmail
     
    };

    let json = JSON.stringify(toSend);
    //var cors = require('cors');
    

    console.log("POST WITH AXIOS!Sending:" + json);

    axios.post(
      'http://localhost:8080/test/url/user',
      json,
      
      {withCredentials: true,},).then(  //Do I need withCredentials since this is a registration page
          res => {

            console.log("DATA:"+res);
            
            console.log("DATA0:"+res.data)
            
        })
        .catch((err) => {
          console.log({err});
          alert("Error: " + err.response);
        });

        nextPageHandler("Login")
  }

  function funn(){
    alert("onClick needs to be changed to sendToDB() once back-end is setup")
    nextPageHandler("Login")
  }

  return (
    <div className="container custom fade-in">
      <div className="d-flex justify-content-center align-items-center h-50">

        <div className="card text-black">
          <div className="card-body">
            <div className="justify-content-center">
              <p className="text-center h1">Sign up</p>

              <form className="">

                <div className="inputStyle">
                  <label>First Name</label>
                  <input type="text" id="" className="test" value={userFirstname} onChange={firstnameChangeHandler}/>
                  
                </div>

                <div className="inputStyle">
                  <label>Last Name</label>
                  <input type="text" id="" className="test" value={userLastname} onChange={lastnameChangeHandler}/>
                  
                </div>

                <div className="inputStyle">
                  <label className="">Username</label>
                  <input type="text" id="" className="test" value={userName} onChange={userNameChangeHandler}/>
                  
                </div>

                <div className="inputStyle">
                  <label className="">Password</label>
                  <input type="password" id="" className="test" value={userPass} onChange={passChangeHandler}/>
                  
                </div>

                <div className="inputStyle">
                  <label className="">Email</label>
                  <input type="email" id="" className="test" value={userEmail} onChange={emailChangeHandler}/>
                </div>

                <div className="d-flex justify-content-center buttons">
                  <Button onClick={() => nextPageHandler("Login")}>Back to Login</Button>
                  <Button className="btnStyle" onClick={() => sendToDB()}>Create Account</Button>
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