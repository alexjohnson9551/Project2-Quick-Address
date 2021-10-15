/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';
import { render } from 'react-dom';
// import styles from './HomeTable.module.scss';
import TableEntry from './TableEntry';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { remove, update } from '../../slices/location.slice';
import Location from '../../models/location';
import PreLocation from '../../models/prelocation';

const HomeTable = () => {
  
  const dispatch = useAppDispatch();
  const locationState = useAppSelector((state => state.location));

  let deleteLocation = (loc: Location) => {
    console.log("Trying to delete: " + loc.prelocation.address);
    dispatch(remove(loc));
  };

  let updateTitle = (loc: Location, title: string) => {
    // set title
    let loc2 = {
      id: loc.id,
      title: title,
      userid: loc.userid,
      prelocation: loc.prelocation
    };
    // update title in db

    // update title in store
    dispatch(update(loc2));
  }

  return (
    <div>
      {locationState.map(loc => (
        <TableEntry loc={loc} deleteLocation={deleteLocation} updateTitle={updateTitle}/>
      ))}
    </div>
  );


};

export default HomeTable;

