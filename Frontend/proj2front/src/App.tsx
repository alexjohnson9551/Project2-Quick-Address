import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller from './components/Controller/Controller';

function App() {
  return (
    <div className="App">
      <Router>
        <Controller />
      </Router>
    </div>
  );
}
export default App;
