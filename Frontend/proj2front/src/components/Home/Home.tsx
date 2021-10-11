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
    <p>
      Three sensible options for "home" page: 1) this is the same as the page to view addresses they've entered <br/>
       2) this is the same as the page to enter a new address <br/> 
       3) this is another page altogether, perhaps showing personal info, and probably big buttons to go to either of the above mentioned pages
      </p>
    <br/>
    <Button onClick={() => logout()}>Logout</Button>
  </div>);

};

export default Home;