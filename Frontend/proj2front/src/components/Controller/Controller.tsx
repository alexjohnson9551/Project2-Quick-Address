import React, { useState, useCallback } from 'react';
import AddressFromCode from '../AddressFromCode/AddressFromCode';
import Home from '../Home/Home';
import Login from '../Login/Login'
import MapContainer from '../Map/ShowMap';
import {LoggedInNav, LoggedOutNav} from '../Navigation/NavSetup';
import Registration from '../Registration/Registration';

const Controller = (props: any) => {
  const [page, setPage] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  let nextPageHandler = useCallback(
    (x: string) => {
      if (x === "Logout") {
        logout();
      } else {
        setPage(x);
      }
    }, [],
  );

  const logout = () => {
    setLoggedIn(false);
    alert("Logged out.");
    setPage("Login");
  };

  let toDisplay = null;
  let Nav = loggedIn ? 
  <LoggedInNav nextPageHandler={nextPageHandler}/>:
  <LoggedOutNav nextPageHandler={nextPageHandler}/>
  
  if (page === "Login") {
    toDisplay =
      <div>
        {Nav}
        <Login
          username={username}
          setUsername={setUsername}
          nextPageHandler={nextPageHandler}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
  } else if (page === "Registration") {
    toDisplay =
      <div>
        {Nav}
        <Registration nextPageHandler={nextPageHandler}/>
      </div>
  } else if (page === "Home") {
    toDisplay =
      <div>
        {Nav}
        <Home nextPageHandler={nextPageHandler} username={username}/>
      </div>
  } else if (page === "Map") {
    toDisplay =
      <div>
        {Nav}
        <MapContainer/>
      </div>
  } else if (page === "Decode") {
    toDisplay =
      <div>
        {Nav}
        <AddressFromCode/>
      </div>
  }

  return (
    <div>
      {toDisplay}
    </div>
  );
}

export default Controller;
