import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Navigation from '../Navigation/Navigation';


const Home = (props: any) => {


  const logout = () => {
    props.nextPageHandler("Logout");
  }

  return (<div>
    <h1>Welcome {props.username}</h1>
    <br/>
    <Button onClick={() => logout()}>Logout</Button>
  </div>);

};

export default Home;
