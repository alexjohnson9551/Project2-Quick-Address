import React, { useState, useCallback } from 'react';
import ManagePages from './ManagePages';

interface ControllerProps {
}

const Controller : React.FC<ControllerProps> = () => {
  const [page, setPage] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // const [user, setUser] = useState(
  //   {
  //     username: "",
  //     firstName: "",
  //     lastName: "",
  //     email: ""
  //   });

  let nextPageHandler = useCallback(
    (nextPage: string) => {
      setPage(nextPage);
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

export type {ControllerProps};
export default Controller;
