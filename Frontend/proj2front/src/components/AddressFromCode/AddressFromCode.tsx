/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { getAddress } from '../../remote/address-api/address.api'
import MapContainer from '../Map/ShowMap'
import Location from './../../models/location'
import QRForCode from './QRForCode'
import './AddressFromCodeStyle.css'
import { useHistory } from 'react-router-dom'



const AddressFromCode = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0, address: "", title: "", message: "Enter Code to Find Location Below or Enter a Valid URL in the Address Bar" })
  const [code, setCode] = useState("")
  let windowPath = window.location.pathname

  const history = useHistory()

  let inputForm = (<InputGroup className="code-search-form justify-content-center">
    <Form.Control
      type="text"
      placeholder="Enter Code to Find Location"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    ></Form.Control>
    <Button
      variant="success"
      className="entrybutton"
      onClick={() => searchFromForm()}
    >
      Search
    </Button>
  </InputGroup>)


  // foundType 0 means no search yet, no code in URL
  // foundType 1 means successful search
  // foundType 2 means unsuccessful search
  let toDisplay = (<>
    <div className="container">
      <h2>
        {location.title}
      </h2>
      <h2>
        {location.address}
      </h2>
      <div className="row justify-content-center">
        {location.message}
      </div>
      <div className="row justify-content-center">
        {inputForm}
      </div>
      <MapContainer lat={location.lat} lng={location.lng}></MapContainer>
    </div>
  </>)

  let searchFromForm = () => {
    history.push("/View/" + code)
    searchForLocation(code);
  }

  let searchForLocation = async (codeToSend: string) => {
    try {
      let loc = await getAddress(codeToSend)
      console.log('NEW ADDRESS:' + 'lat' + loc)
      console.log(loc.lat)
      let title = loc.title == null ? "" : loc.title
      setLocation({
        lat: loc.lat,
        lng: loc.lng,
        address: loc.address,
        title: title,
        message: ""
      })
      setCode("");
    } catch (error: any) {
      console.log(error)
      if (error.response !== undefined && error.response.status == 404) {
        setLocation({
          lat: 0,
          lng: 0,
          address: "",
          title: "",
          message: "Location Not Found! Please check the URL or code entered."
        });
      }
    }
  }

  useEffect(() => {
    let urlCode = windowPath.substring(
      windowPath.lastIndexOf('/') + 1,
      windowPath.length,
    )
    searchForLocation(urlCode)
  }, [])

  return <div>{toDisplay}</div>
}

export default AddressFromCode
