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
        {/* <Route path="/Login">
          <Login
            username={username}
            setUsername={setUsername}
            nextPageHandler={props.nextPageHandler}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        </Route> */}
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
        <Route path="/Logout">
          {/* this needs to be fixed, probably the empty url should lead to login or home depending on the user being logged in
          whatever component that is called can figure this out, one of those willMount methods can check or some kind of
          withAuth composition or something like that */}
          <Login
            username={username}
            setUsername={setUsername}
            nextPageHandler={props.nextPageHandler}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        </Route>
        {/* <Route path="/">
          <Home 
            username={username}
            nextPageHandler={props.nextPageHandler}
            setLoggedIn={setLoggedIn} />
        </Route> */}
        <Route path="/">
          <LoginOrHome 
            username={username}
            setUsername={setUsername}
            nextPageHandler={props.nextPageHandler}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn} />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>);
};

export default ManagePages2;
