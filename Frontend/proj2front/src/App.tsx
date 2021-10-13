import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller from './components/Controller/Controller';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration.lazy';
import MapContainer from './components/Map/ShowMap';
import MyGoogleMap from './components/Map/MyGoogleMaps';
import Controller2 from './components/Controller2/Controller2';


// TO PREVENT ERRORS, IF YOU WANT TO KEEP USING CONTROLLER IT MUST BE INSIDE THE BROWSERROUTER!
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function App() {
  return (
    <div className="App">
      <Router>
        <Controller2 />
      </Router>


      {/* <Router>
        <Controller />
      </Router> */}
    </div>
  );
}

//Example of a simple router...currently not being used
// function Router() {
//   return (
//     <Router>
//       <div className="CoolRouter">
//         <Switch>
//           <Route path="/" component={Registration}></Route>
//           <Route path="/map" component={MapContainer}></Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
