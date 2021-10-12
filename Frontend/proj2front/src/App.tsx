import React from 'react';
import {BrowserRouter as CoolRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller from './components/Controller/Controller';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration.lazy';
import MapContainer from './components/Map/ShowMap';

function App() {
  return (
    <div className="App">
      <Controller/>
    </div>
  );
}

//Example of a simple router...currently not being used
function Router() {
  return (
    <CoolRouter>
      <div className="CoolRouter">
        <Switch>
          <Route path ="/" component={Registration}></Route>
          <Route path ="/map" component={MapContainer}></Route>
        </Switch>
      </div>
    </CoolRouter>
  );
}

export default App;