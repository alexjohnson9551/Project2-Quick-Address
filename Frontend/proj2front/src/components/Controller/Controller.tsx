import React, { useState, useCallback } from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login'
import Registration from '../Registration/Registration';

const Controller = (props: any) => {
  const [page, setPage] = useState("Login");

  //temporary, this should be changed
  const [username, setUsername] = useState("");

  let nextPageHandler = useCallback(
    (x: string) => {
      setPage(x);
    }, [],
  );

  let pageList = [
    "Login",
    "Registration",
    "Home"
  ];

  let toDisplay;

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
    toDisplay =
      <div>
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
