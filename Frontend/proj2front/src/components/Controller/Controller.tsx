import React, { useState, useCallback } from 'react';
import ManagePages from './ManagePages';

const Controller = (props: any) => {
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

  let nextPageHandler = useCallback(
    (x: string) => {
      setPage(x);
    }, [],
  );

  let toDisplay = <ManagePages 
    nextPageHandler = {nextPageHandler}
    username = {username}
    setUsername = {setUsername}
    loggedIn = {loggedIn}
    setLoggedIn = {setLoggedIn}
    page = {page}
  />;

  return (
    <div>
      {toDisplay}
    </div>
  );
}

export default Controller;
