import React, { useState, useCallback } from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login'
import Navigation from '../Navigation/Navigation';
import Registration from '../Registration/Registration';

const Controller = (props: any) => {
  const [page, setPage] = useState("Login");

  //temporary, this should be changed
  const [username, setUsername] = useState("");

  let nextPageHandler = useCallback(
    (x: string) => {
      if(x == "Logout") {
        logout();
        setPage("Login")
      } else {
        setPage(x);
      }
    }, [],
  );

  const logout = () => {
    alert("Did logout.");
  };

  let pageList = [
    "Login",
    "Registration",
    "Home"
  ];

  let toDisplay;
  let navButs;

  if (page == "Login") {
    toDisplay =
      <div>
        <Login
          username={username}
          setUsername={setUsername}
          nextPageHandler={nextPageHandler}
        ></Login>
      </div>
  } else if (page == "Registration") {
    toDisplay =
      <div>
        <Registration
          nextPageHandler={nextPageHandler}
        ></Registration>
      </div>
  } else if (page == "Home") {
    navButs = [{dest: "Registration", title: "Registration"},
          {dest: "Home", title: "Home"},
          {dest: "Home", title: "Home Alternate Title"},
          {dest: "Logout", title: "Logout"}];
    toDisplay =
      <div>
        <Navigation
          navButs={navButs} 
          nextPageHandler={nextPageHandler}   
        >
        </Navigation>
        <Home
          nextPageHandler={nextPageHandler}
          username={username}
        ></Home>
      </div>
  }

  return (
    <div>
      {toDisplay}
    </div>
  );
}

export default Controller;
