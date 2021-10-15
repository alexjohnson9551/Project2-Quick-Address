import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useHistory } from 'react-router';
import HomeTable from '../HomeTable/HomeTable.lazy';
import MyGoogleMap from '../Map/MyGoogleMaps';
import Navigation from '../Navigation/Navigation';
import './homeStyle.css';


const Home = (props: any) => {
  const history = useHistory();

  const logout = () => {
    props.nextPageHandler("Logout");
    props.setLoggedIn(false);
    history.push("/");
  }

  return (<div>
    <h1>Welcome {props.username}</h1>
    <p>
      The left side will contain the map to add addresses, the right side will contain a list of the user's addresses.
      </p>
    <br/>
    <div className="container">
      <div className="row">
        <div className="col column1 main-wrapper">
          <MyGoogleMap/>
        </div>
        <div className="col">
        <HomeTable/>
        </div>
        
      </div>
    </div>
  </div>);
  
  
};

export default Home;
