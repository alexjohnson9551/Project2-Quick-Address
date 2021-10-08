import React from 'react';
import { Button } from 'react-bootstrap';


const Home = (props: any) => {


  const logout = () => {
    props.nextPageHandler("Login");
  }

  return (<div>
    <h1>Welcome {props.username}</h1>
    <br/>
    <Button onClick={() => logout()}>Logout</Button>
  </div>);

};

export default Home;
