/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component, useState } from 'react'
import { render } from 'react-dom'
// import styles from './HomeTable.module.scss';
import TableEntry from './TableEntry'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { remove, update } from '../../slices/location.slice'
import Location from '../../models/location'
import axios from 'axios'
import { convertToObject } from 'typescript'
import { propTypes } from 'qrcode.react'
import { deleteLocation } from '../../remote/location-api/location.api'
import { deleteLocationService, updateLocationService } from '../../services/addres.service'

const HomeTable = () => {
  let deleteLoc = (loc: Location) => {
    deleteLocationService(""+loc.id)
  }

  let updateTitle = (loc: Location, title: string) => {
    let loc2 = {...loc}
    loc2.title = title
    console.log("LOC"+loc)
    console.log(loc2)
    updateLocationService(loc2)
  }
  let locationState = useAppSelector(state=>state.location);
  return (
    <div>
      {locationState.map((loc) => (
        <TableEntry
          loc={loc}
          deleteLocation={deleteLoc}
          updateTitle={updateTitle}
        />
      ))}
    </div>
  )
}

export default HomeTable
