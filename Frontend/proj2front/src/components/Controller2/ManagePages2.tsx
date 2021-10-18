// electric boogaloo

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  BrowserRouter
} from "react-router-dom";
import Home from '../Home/Home';
import Login from '../Login/Login';
import MyGoogleMap from '../Map/MyGoogleMaps';
import AddressFromCode from '../AddressFromCode/AddressFromCode';
import { LoggedInNav2, LoggedOutNav2 } from '../Navigation/NavSetup2';
import RegPage from '../Registration/Registration';
import LoginOrHome from '../Home/LoginOrHome';

const ManagePages2 = (props: any) => {

  let username: string = props.username;
  let setUsername = props.setUsername;
  let loggedIn: boolean = props.loggedIn;
  let setLoggedIn = props.setLoggedIn;
  let page = props.page;

  let toDisplay = null;

  let Nav = loggedIn ?
    <LoggedInNav2 nextPageHandler={props.nextPageHandler}/> :
    <LoggedOutNav2 nextPageHandler={props.nextPageHandler}/>;

  return (<BrowserRouter>
    {Nav}
    <div>
      <Switch>
        <Route path="/Map">
          <div className="main-wrapper">
            <MyGoogleMap />
          </div>
        </Route>
        <Route path="/Registration">
          <RegPage nextPageHandler={props.nextPageHandler} />
        </Route>
        <Route path="/View">
          <AddressFromCode />
        </Route>
        <Route path="/">
          <LoginOrHome 
            username={username}
            setUsername={setUsername}
            nextPageHandler={props.nextPageHandler}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            user={props.user}
            updateLoggedIn={props.updateLoggedIn} />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>);
};

export default ManagePages2;
