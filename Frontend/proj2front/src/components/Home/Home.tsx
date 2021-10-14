import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useHistory } from 'react-router';
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
          <p>TEST</p>
          <table>
            <thead>
              <tr>
                <td>
                  Title
                </td>
                <td>
                  address
                </td>
                <td>
                  code
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
              <tr>
                <td>
                  the best place ever
                </td>
                <td>
                  123 first street, newark, nj 55555
                </td>
                <td>
                  fdsaf3qrf3a
                </td>
                <td>
                  copy
                </td>
                <td>
                  delete
                </td>
                <td>
                  notes
                </td>
              </tr>
            </tbody>

          </table>
          
        </div>
        
      </div>
    </div>
    <div><Button onClick={() => logout()}>Logout</Button></div>
  </div>);
  
  
};

export default Home;
