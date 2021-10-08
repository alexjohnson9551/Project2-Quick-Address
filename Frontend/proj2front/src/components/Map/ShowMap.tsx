import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 34.08084971431456, lng: -118.3172325910351
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCIqctgJ3yzNRUTJv4Bmo1QY3T4VGMYpiw'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
};
export default MapContainer;