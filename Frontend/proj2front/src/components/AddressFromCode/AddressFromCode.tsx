/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { getAddress } from '../../remote/address-api/address.api'
import MapContainer from '../Map/ShowMap'
import Address from './../../models/location'
const AddressFromCode = () => {
  const [location, setLocation] = useState({ lat: 5, lng: 12 })
  let windowPath = window.location.pathname

  let address: Address
  let code: string = ''
  const toDisplay = (
    <>
      <div className="container">
        <div className="row">Code:{code}</div>
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
        code = windowPath.substring(
          windowPath.lastIndexOf('/') + 1,
          windowPath.length,
        )
        console.log('Full window path:' + windowPath)
        console.log('Code' + code)
        address = await getAddress(code)

        console.log('NEW ADDRESS:' + 'lat' + address.prelocation.lat)
        setLocation({
          lat: address.prelocation.lat,
          lng: address.prelocation.lng,
        })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return <div>{toDisplay}</div>
}

export default AddressFromCode
