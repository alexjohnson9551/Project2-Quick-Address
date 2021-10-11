import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller from './components/Controller/Controller';
import MyGoogleMap from './components/Map/MyGoogleMaps';
function App() {
  return (
    <div className="main-wrapper">
        <MyGoogleMap />
    </div>
  );
}

export default App;