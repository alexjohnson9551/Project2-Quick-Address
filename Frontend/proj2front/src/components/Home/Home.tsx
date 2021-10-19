import React from 'react'
import { Button } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { useHistory } from 'react-router'
import HomeTable from '../HomeTable/HomeTable.lazy'
import MyGoogleMap from '../Map/MyGoogleMaps'
import Navigation from '../Navigation/Navigation'
import './homeStyle.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { add } from '../../slices/location.slice'
import axios from 'axios'
import Location from '../../models/location'
import { idText } from 'typescript'

const Home = (props: any) => {

  const dispatch = useAppDispatch();
  const userState = useAppSelector((state => state.user));

  const addNewLocation = (loc: Location) => {
    loc.title = "";
    loc.id = 0;
    loc.userID = userState[0].userID;

    alert("Sending user id = " + loc.userID);

    let jsonToSend = JSON.stringify(loc);
    axios
      .post<string, { data: any }>(
        'http://localhost:8080/addaddress',
        jsonToSend,
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then((res) => {
        loc.id = res.data.id;
        loc.userID = res.data.userID;

        console.log("Received: " + JSON.stringify(res.data));

        dispatch(add(loc))
      })
      .catch((err) => {
        console.log({ err })
        alert('Error: ' + err.response)
      })
  }

  return (<div>
    <h1>Welcome {userState[0].username}</h1>
    <br />
    <div className="container">
      <div className="row">
        <div className="col column1 main-wrapper">
          <MyGoogleMap addNewLocation={addNewLocation}/>
        </div>
        <div className="col">
          <HomeTable />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
