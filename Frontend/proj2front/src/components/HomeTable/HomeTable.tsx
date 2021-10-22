/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react';
import TableEntry from './TableEntry';
import { useAppSelector } from '../../hooks';
import Location from '../../models/location';
import { deleteLocationService, updateLocationService } from '../../services/location.service';
import './HomeTableStyle.css'

const HomeTable = ({qrHandler}:{qrHandler:(qrId: string) => void}) => {

  const locationState = useAppSelector((state => state.location));

  let deleteLoc = (loc: Location) => {
    deleteLocationService(""+loc.id)
  };

  let updateTitle = (loc: Location, title: string) => {
    let loc2 = {...loc}
    loc2.title = title
    console.log("LOC"+loc)
    console.log(loc2)
    updateLocationService(loc2)
  }

  return (
    <div className="entry-table">
      {locationState.map((loc, index) => (
        <TableEntry 
        key={index} 
        loc={loc}
        deleteLocation={deleteLoc}
        updateTitle={updateTitle}
        qrHandler={qrHandler}
        />
      ))}
    </div>
  );
};

export default HomeTable;