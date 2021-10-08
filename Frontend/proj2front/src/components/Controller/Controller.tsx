import React, { useState, useCallback } from 'react';
import styles from './Controller.module.scss';
import Login from '../Login/Login'
import Registration from '../Registration/Registration';

const Controller = (props: any) => {
  const [page, setPage] = useState("Login");
  const [userInfo, setUserInfo] = useState({
    uname: ""
  });

  let nextPageHandler = useCallback(
    (x: string) => {
      setPage(x);
    }, [],
  );

  let pageList = [
    "Login",
    "Registration"
  ];

  let toDisplay;

  if (page == "Login") {
    toDisplay =
      <div>
        <Login
          nextPageHandler={nextPageHandler}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        ></Login>
      </div>
  } else if (page == "Registration") {
    toDisplay =
      <div>
        <Registration
          nextPageHandler={nextPageHandler}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        ></Registration>
      </div>
  }

  return (
    <div className={styles.Controller} data-testid="Controller">
      {toDisplay}
    </div>
  );
}

export default Controller;
