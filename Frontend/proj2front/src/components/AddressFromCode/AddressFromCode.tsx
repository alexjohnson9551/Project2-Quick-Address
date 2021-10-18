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

  let address
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
        let localCode = windowPath.substring(
          windowPath.lastIndexOf('/') + 1,
          windowPath.length,
        )
        setCode(localCode)
        console.log('Full window path:' + windowPath)
        console.log('Code' + localCode)
        address = await getAddress(localCode)

        console.log('NEW ADDRESS:' + 'lat' + address)
        console.log(address.lat)
        setLocation({
          lat: address.lat,
          lng: address.lng,
        })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return <div>{toDisplay}</div>
}

export default AddressFromCode
