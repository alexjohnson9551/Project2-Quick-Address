import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
const MapContainer = ({ lat, lng }: { lat: number; lng: number }) => {
  const mapStyles = {
    height: '70vh',
    width: '100%',
  }

  const center = {
    lat: lat,
    lng: lng,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyCIqctgJ3yzNRUTJv4Bmo1QY3T4VGMYpiw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={center} />
    </LoadScript>
  )
}
export default MapContainer
