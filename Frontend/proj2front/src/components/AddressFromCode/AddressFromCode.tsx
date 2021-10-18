/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAddress } from '../../remote/address-api/address.api'
import MapContainer from '../Map/ShowMap'
import Location from './../../models/location'
import QRForCode from './QRForCode'



const AddressFromCode = () => {
  const [location, setLocation] = useState({ lat: 5, lng: 12 })
  const [code, setCode] = useState('')
  let windowPath = window.location.pathname

  let address: Location
  //let code: string = ''
  const toDisplay = (
    <>
      <div className="container">
        <div className="row"><QRForCode></QRForCode></div>
        <div className="row">
          <div>{code}</div>
          <MapContainer lat={location.lat} lng={location.lng}></MapContainer>
        </div>
      </div>
    </>
  )
  useEffect(() => {
    ;(async () => {
      try {
        let code1 = windowPath.substring(
          windowPath.lastIndexOf('/')+1
        )
        setCode(
          code1
        )
        console.log('Full window path = ' + windowPath)
        console.log('Code = ' + code1)
        // address = await getAddress(code1)
        axios
        .get<string, { data: Location }>(
          'http://localhost:8080/address/' + code1,
          { headers: { 'Content-Type': 'application/json' } },
        )
        .then((res) => {
          setLocation({
            lat: res.data.prelocation.lat,
            lng: res.data.prelocation.lng,
          })
        })
        .catch((err) => {
          console.log({ err })
          alert('Error: ' + err.response)
        })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return <div>{toDisplay}</div>
}

export default AddressFromCode
