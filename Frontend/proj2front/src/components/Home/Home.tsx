import React from 'react'
import { Button } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { useHistory } from 'react-router'
import HomeTable from '../HomeTable/HomeTable.lazy'
import MyGoogleMap from '../Map/MyGoogleMaps'
import Navigation from '../Navigation/Navigation'
import './homeStyle.css'
import { useAppDispatch } from '../../hooks'
import { add } from '../../slices/location.slice'
import axios from 'axios'
import Location from '../../models/location'
import PreLocation from '../../models/prelocation'
import { idText } from 'typescript'

const Home = (props: any) => {
  const dispatch = useAppDispatch()

  const addNewLocation = (ploc: PreLocation) => {
    let location: Location = {
      id: null,
      userid: 0,
      title: '',
      prelocation: ploc,
    }
    let jsonToSend = JSON.stringify(location)

    axios
      .post<string, { data: number }>(
        'http://localhost:8080/addaddress',
        jsonToSend,
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then((res) => {
        let loc: Location = {
          id: res.data,
          userid: 0, //needs to be given the actual user id...
          title: '',
          prelocation: ploc,
        }
        dispatch(add(loc))
      })
      .catch((err) => {
        console.log({ err })
        alert('Error: ' + err.response)
      })
  }

  return (
    <div>
      <h1>Welcome {props.username}</h1>
      <p>
        The left side will contain the map to add addresses, the right side will
        contain a list of the user's addresses.
      </p>
      <br />
      <div className="container">
        <div className="row">
          <div className="col column1 main-wrapper">
            <MyGoogleMap addNewLocation={addNewLocation} />
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
