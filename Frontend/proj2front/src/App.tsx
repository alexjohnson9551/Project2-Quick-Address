import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller from './components/Controller/Controller';

interface AppProps{
}

const App : React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Router>
        <Controller />
      </Router>
    </div>
  );
}

export type {AppProps};
export default App;
