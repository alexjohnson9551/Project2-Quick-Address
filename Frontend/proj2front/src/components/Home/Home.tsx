import React from 'react';
import { Button } from 'react-bootstrap';

interface HomeProps{
  nextPageHandler: (nextPage:string) => void;
  username: string;
}

const Home : React.FC<HomeProps> = (props: any) => {

  const nextPageHandler: (nextPage:string) => void = props.nextPageHandler;
  const username = props.username;

  const logout = () => { nextPageHandler("Logout");}

  const toReturn = 
  <div>
    <h1>Welcome {username}</h1>
    <p>
      Three sensible options for "home" page: <br/>
      1) this is the same as the page to view addresses they've entered <br/>
      2) this is the same as the page to enter a new address <br/> 
      3) this is another page altogether, perhaps showing personal info, and probably big buttons to go to either of the above mentioned pages<br/>
      The left side will contain the map to add addresses, the right side will contain a list of the user's addresses.<br/>
      </p>
    <br/>
    <Button onClick={() => logout()}>Logout</Button>
  </div>

  return (
    <div>
      {toReturn}
    </div>
  );

};

export default Home;
