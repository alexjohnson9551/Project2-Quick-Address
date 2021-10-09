import React, { useState, useCallback } from 'react';
import AddressFromCode from '../AddressFromCode/AddressFromCode';
import Home from '../Home/Home';
import Login from '../Login/Login'
import MapContainer from '../Map/ShowMap';
import Navigation from '../Navigation/Navigation';
import Registration from '../Registration/Registration';

const Controller = (props: any) => {
  const [page, setPage] = useState("Login");

  //temporary, this should be changed
  const [username, setUsername] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  let nextPageHandler = useCallback(
    (x: string) => {
      if (x == "Logout") {
        logout();
        setPage("Login")
      } else {
        setPage(x);
      }
    }, [],
  );

  const logout = () => {
    setLoggedIn(false);
    alert("Logged out.");
  };

  let toDisplay;
  let loggedInNavButs = [{ dest: "Home", title: "Home" },
  { dest: "Map", title: "Enter New Address" },
  { dest: "Decode", title: "View Address from Code" },
  { dest: "Logout", title: "Logout" }];

  let loggedOutNavButs = [
    { dest: "Decode", title: "View Address from Code" },
    { dest: "Registration", title: "Sign Up" },
    { dest: "Login", title: "Login" }];

  if (page == "Login") {
    toDisplay =
      <div>
        <Navigation
          navButs={loggedOutNavButs}
          nextPageHandler={nextPageHandler}
        >
        </Navigation>
        <Login
          username={username}
          setUsername={setUsername}
          nextPageHandler={nextPageHandler}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        ></Login>
      </div>
  } else if (page == "Registration") {
    toDisplay =
      <div>
        <Navigation
          navButs={loggedOutNavButs}
          nextPageHandler={nextPageHandler}
        >
        </Navigation>
        <Registration
          nextPageHandler={nextPageHandler}
        ></Registration>
      </div>
  } else if (page == "Home") {
    toDisplay =
      <div>
        <Navigation
          navButs={loggedInNavButs}
          nextPageHandler={nextPageHandler}
        >
        </Navigation>
        <Home
          nextPageHandler={nextPageHandler}
          username={username}
        ></Home>
      </div>
  } else if (page == "Map") {
    toDisplay =
      <div>
        <Navigation
          navButs={loggedInNavButs}
          nextPageHandler={nextPageHandler}
        >
        </Navigation>
        <MapContainer
        ></MapContainer>
      </div>
  } else if (page == "Decode") {
    let navButs = loggedIn ? loggedInNavButs : loggedOutNavButs;
    toDisplay =
      <div>
        <Navigation
          navButs={navButs}
          nextPageHandler={nextPageHandler}
        >
        </Navigation>
        <AddressFromCode
        ></AddressFromCode>
      </div>
  }

  return (
    <div>
      {toDisplay}
    </div>
  );
}

export default Controller;
