import React, { useCallback, useState } from 'react'
import HomeTable from '../HomeTable/HomeTable'
import MyGoogleMap from '../Map/MyGoogleMaps'
import './homeStyle.css'
import { useAppSelector } from '../../hooks'
import Location from '../../models/location'
import QRForCode from '../AddressFromCode/QRForCode'
import { insertLocationService } from '../../services/location.service'

const Home = () => {

  const [qr, setQR] = useState(""+0)
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

    insertLocationService(loc);
  }

  if(qr!=="0"){
    toDisplay = <div className="qr-whole-page"><QRForCode id={qr} qrHandler={qrHandler} /></div>
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
