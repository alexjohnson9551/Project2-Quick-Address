// electric boogaloo

import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import MyGoogleMap from '../Map/MyGoogleMaps'
import AddressFromCode from '../AddressFromCode/AddressFromCode'
import { LoggedInNav, LoggedOutNav } from '../Navigation/NavSetup'
import RegPage from '../Registration/Registration'
import LoginOrHome from '../Home/LoginOrHome'

const ManagePages = (props: any) => {
  let username: string = props.username
  let setUsername = props.setUsername
  let loggedIn: boolean = props.loggedIn
  let setLoggedIn = props.setLoggedIn

  useEffect(() => {
    props.updateLoggedIn();
  }, [props]);

  let Nav = loggedIn ? (
    <LoggedInNav nextPageHandler={props.nextPageHandler} />
  ) : (
    <LoggedOutNav nextPageHandler={props.nextPageHandler} />
  )

  return (
    <Router>
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
              updateLoggedIn={props.updateLoggedIn}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default ManagePages;
