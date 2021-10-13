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
import Login from '../Login/Login2';
import MyGoogleMap from '../Map/MyGoogleMaps';
import Registration from '../Registration/Registration2';
import AddressFromCode from '../AddressFromCode/AddressFromCode';
import { LoggedInNav2, LoggedOutNav2 } from '../Navigation/NavSetup2';
import ManagePages2 from './ManagePages2';
import { useHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';



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


  let nextPageHandler = (x: string) => {

    // history.push(x);

    if (x == "Logout") {
      alert("Logged out.");
      setLoggedIn(false);
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
  />;

  return (
    <div>
      {toDisplay}
    </div>
  );
};

export default withRouter(Controller2);
