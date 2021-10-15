// electric boogaloo

import React, { useCallback, useState } from 'react';
import styles from './Controller2.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import MyGoogleMap from '../Map/MyGoogleMaps';
import Registration from '../Registration/Registration';
import AddressFromCode from '../AddressFromCode/AddressFromCode';
import { LoggedInNav2, LoggedOutNav2 } from '../Navigation/NavSetup2';
import ManagePages2 from './ManagePages2';
import { useHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import axios from 'axios';
import User from '../../models/user';


const Controller2 = (props: any) => {
  const history = useHistory();

  const [page, setPage] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(
    {
      username: "",
      firstName: "",
      lastName: "",
      email: ""
    });

  let getLoggedInUser = () => {
    //something is broken... :(
    let isLoggedIn = false;
    axios.get<string, { data: User }>('http://localhost:8080/getloggedinuser').then(
      (res) => { 
        console.log(res.data); 
        return res.data; 
      }
    ).catch((err) => {
      console.log({ err });
      alert("Error: " + err.response);
    });
    return null;
  }

  let nextPageHandler = (x: string) => {

    // history.push(x);

    if (x == "Logout") {
      setLoggedIn(false);
      axios.post(
        'http://localhost:8080/logout',
        { headers: { 'Content-Type': "application/json" } }).then(
          (res) => {
            alert(res.data);
          })
        .catch((err) => {
          console.log({ err });
          alert("Error: " + err.response);
        });
    }

    console.log("PAGE HANDLED: " + x);
  };


  let toDisplay = <ManagePages2
    nextPageHandler={nextPageHandler}
    username={username}
    setUsername={setUsername}
    loggedIn={loggedIn}
    setLoggedIn={setLoggedIn}
    page={page}
    getLoggedInUser={getLoggedInUser}
  />;

  return (
    <div>
      {toDisplay}
    </div>
  );
};

export default withRouter(Controller2);
