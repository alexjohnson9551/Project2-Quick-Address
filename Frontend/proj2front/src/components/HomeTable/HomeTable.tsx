/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component, useState } from 'react';
import { render } from 'react-dom';
// import styles from './HomeTable.module.scss';
import TableEntry from './TableEntry';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { remove, update } from '../../slices/location.slice';
import Location from '../../models/location';
import axios from 'axios';
import { convertToObject } from 'typescript';
import { propTypes } from 'qrcode.react';
import {deleteAddress} from '../../remote/address-api/address.api'

const HomeTable = ({qrHandler}:{qrHandler:(qrId: string) => void}) => {

  const dispatch = useAppDispatch();
  const locationState = useAppSelector((state => state.location));

  let deleteLocation = (loc: Location) => {
    deleteAddress(loc.id)
    dispatch(remove(loc))
  };

  let updateLocationInStore = (loc: Location, title: string) => {
    dispatch(update(loc));
  }

  let updateTitle = (loc: Location, title: string, toDB: boolean) => {
    // set title ERROR WITH THIS
    // loc.title = title;
    //Create new object instead
    let loc2: Location = {
      id: loc.id,
      title: title,
      userID: loc.userID,
      address: loc.address,
      lat: loc.lat,
      lng: loc.lng
    };
    // update title in db
    if(toDB) {
      let jsonToSend = JSON.stringify(loc2);
      axios.post<string, { data: any }>(
          'http://localhost:8080/updatetitle',
          jsonToSend,
          { headers: { 'Content-Type': 'application/json' } },
        )
        .catch((err) => {
          console.log({ err })
          alert('Error: ' + err.response)
        })
    }
    // update title in store
    dispatch(update(loc2));
  }

  return (
    <div>
      {locationState.map(loc, index => (
        <TableEntry 
        key={index} 
        loc={loc}
        deleteLocation={deleteLocation}
        updateTitle={updateTitle}
        qrHandler={qrHandler}
        />
      ))}
    </div>
  );


};

export default HomeTable;