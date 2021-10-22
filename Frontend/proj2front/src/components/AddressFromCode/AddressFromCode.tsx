/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent, useEffect, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import './AddressFromCodeStyle.css'
import { useHistory } from 'react-router-dom'
import MyGoogleMap from '../Map/MyGoogleMaps'
import { getLocation } from '../../remote/location-api/location.api'

const AddressFromCode = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0, address: "", title: "", message: "Enter Code to Find Location Below or Enter a Valid URL in the Address Bar" })
  const [code, setCode] = useState("")
  let windowPath = window.location.pathname

  const history = useHistory()

  let inputForm = (
    <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Form onSubmit={(e) => searchFromForm(e)}>
          <InputGroup className="code-search-form">
            <Form.Control
              type="text"
              placeholder="Enter Code to Find Location"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            ></Form.Control>
            <Button
              variant="success"
              className="entrybutton"
              type="submit"
            >
              Search
            </Button>
          </InputGroup>
        </Form>
    </Container>
  )

  let getUrlCode = () => {
    return windowPath.substring(
      windowPath.lastIndexOf('/') + 1,
      windowPath.length,
    )
  };

  let map = (<MyGoogleMap allowInteraction={false} presetLocation={location}></MyGoogleMap>);

  let toDisplay = (<>
    <div className="container">
      <h2>
        {location.title}
      </h2>
      <div className="row justify-content-center">
        {location.message}
      </div>
      <div className="row justify-content-center">
        {inputForm}
      </div>
      <div className="main-wrapper">{map}</div>
    </div>
  </>)

  let searchFromForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(code !== "") {
      history.push("/View/" + code);
      window.location.reload();
      searchForLocation(code);
    } else {
      history.push("/View");
      window.location.reload();
    }
  }

  let searchForLocation = async (codeToSend: string) => {
    try {
      let loc = await getLocation(codeToSend)
      console.log('NEW ADDRESS: lat' + loc)
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
      if (error.response !== undefined && error.response.status === 404) {
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
    let urlCode = getUrlCode();
    searchForLocation(urlCode)
  }, [])

  return <div>{toDisplay}</div>
}

export default AddressFromCode
