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
    // if you use history.push here it only updates the url and does not route
    // the fix is to directly implement this in the component that evokes the route change
    // nobody knows why, famous open problem in computer science since 1874

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
