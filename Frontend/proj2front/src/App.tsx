import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller2 from './components/Controller2/Controller2';

function App() {
  return (
    <div className="App">
      <Router>
        <Controller2 />
      </Router>
    </div>
  );
}
export default App;
