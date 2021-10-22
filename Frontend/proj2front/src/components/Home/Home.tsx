import React, { useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { useHistory } from 'react-router'
import HomeTable from '../HomeTable/HomeTable'
import MyGoogleMap from '../Map/MyGoogleMaps'
import Navigation from '../Navigation/Navigation2'
import './homeStyle.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { add } from '../../slices/location.slice'
import axios from 'axios'
import Location from '../../models/location'
import { idText } from 'typescript'
import QRForCode from '../AddressFromCode/QRForCode'

const Home = (props: any) => {

  const [qr, setQR] = useState(""+0)
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state => state.user));
  let toDisplay = <div></div>
  
  let qrHandler = useCallback((qrId:string) => {
    console.log("IN QR CODE!"+qrId+"")
    console.log("QRCODE")
    setQR(qrId)
  }, [])

  const addNewLocation = (loc: Location) => {
    loc.title = "";
    loc.id = 0;
    loc.userID = userState[0].userID;

    // alert("Sending user id = " + loc.userID);

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

  if(qr!=="0"){
    toDisplay = <div className="qr-whole-page"><QRForCode id={qr} qrHandler={qrHandler} />QR</div>
  }else{
    toDisplay =  <div>
    <h1>Welcome {userState[0].username}</h1>
    <br />
    <div className="container">
      <div className="row">
        <div className="col-md-6 column1 main-wrapper">
          <MyGoogleMap addNewLocation={addNewLocation} allowInteraction={true}/>
        </div>
        <div className="col-md-5 column2">
          <HomeTable qrHandler={qrHandler}/>
        </div>
      </div>
    </div>
  </div>
  }

  return ( <div>{toDisplay}</div>
  )
}

export default Home
