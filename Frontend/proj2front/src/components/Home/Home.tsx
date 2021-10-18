import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useHistory } from 'react-router';
import HomeTable from '../HomeTable/HomeTable.lazy';
import MyGoogleMap from '../Map/MyGoogleMaps';
import Navigation from '../Navigation/Navigation';
import './homeStyle.css';
import { useAppDispatch } from '../../hooks';
import { add } from '../../slices/location.slice';
import axios from 'axios';
import Location from '../../models/location';
import PreLocation from '../../models/prelocation';
import { userInfo } from 'os';

const Home = (props: any) => {
  const history = useHistory();

  const dispatch = useAppDispatch();

  const addNewLocation = (ploc: PreLocation) => {

    let jsonToSend = JSON.stringify(ploc);

    axios.post<string, { data: number }>(
      'http://localhost:8080/addaddress',
      jsonToSend,
      { headers: { 'Content-Type': "application/json" } }).then(
        (res) => {
          let loc: Location = {
            id: res.data,
            userid: props.user.UserID, //needs to be given the actual user id...
            title: "",
            prelocation: ploc
          };
          dispatch(add(loc));
        })
      .catch((err) => {
        console.log({ err });
        alert("Error: " + err.response);
      });
  }

  return (<div>
    <h1>Welcome {props.username}</h1>
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
  </div>);


};

export default Home;
