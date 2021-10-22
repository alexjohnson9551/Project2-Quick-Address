// electric boogaloo

import React, { useState } from 'react'
import {
  withRouter,
} from 'react-router-dom'
import ManagePages from './ManagePages'
import axios from 'axios'
import { set, unset } from '../../slices/user.slice'
import { useAppDispatch } from '../../hooks';
import { getAllLocation } from '../../remote/location-api/location.api'
import { addAll, clear } from '../../slices/location.slice'
const Controller2 = (props: any) => {

  const dispatch = useAppDispatch();

  const [page,] = useState('Login')
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  let updateLoggedIn = () => { 
    axios.post<string, {data: any}>(
      'http://localhost:8080/getloggedinuser',
      "",
      { headers: { 'Content-Type': "application/json" }, withCredentials: true}).then(
      async (res) => { 
        if(!loggedIn) {
          // since updates will rerender (and call this function again), only updates if login is new
          setLoggedIn(true);
          dispatch(set(res.data));
          setUsername(res.data.username);
          let loc = await getAllLocation()
          dispatch(addAll(loc))
        }
      }
    ).catch((err) => {
      if (err.response !== undefined && err.response.status === 401) {
        if(loggedIn) {
          doFrontLogout();
        }
      } else {
        console.log(err);
      }
    });
  };

  let nextPageHandler = (x: string) => {
    // history.push(x);
    if (x === "Logout") {
      axios.post<string, {data: any}>(
        'http://localhost:8080/logout', "",
        { headers: { 'Content-Type': "application/json" }, withCredentials: true }).then(
          (res) => {
            doFrontLogout();
          })
        .catch((err) => {
          console.log({ err })
          alert('Error: ' + err.response)
        })
    }
    console.log("PAGE HANDLED: " + x);
  };

  let doFrontLogout = () => {
    setLoggedIn(false);
    dispatch(unset());
    dispatch(clear());
    setUsername("");
    console.log("Changed loggedIn from true to false.");
  };


  let toDisplay = <ManagePages
    nextPageHandler={nextPageHandler}
    username={username}
    setUsername={setUsername}
    loggedIn={loggedIn}
    setLoggedIn={setLoggedIn}
    page={page}
    updateLoggedIn={updateLoggedIn}
  />;

  return <div>{toDisplay}</div>
}

export default withRouter(Controller2)
