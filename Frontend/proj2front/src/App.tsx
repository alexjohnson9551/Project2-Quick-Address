import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller from './components/Controller/Controller';
import Controller2 from './components/Controller2/Controller2'

interface AppProps{
}

const App : React.FC<AppProps> = () => {

  const[showSecond, setShowSecond] = useState(false);
  let toDisplay = <>
  </>

  if(showSecond){
    toDisplay = 
    <>
    <Controller2 />
    </>
  }
  else{
    toDisplay = 
    <>
    <Controller />
    </>
  }

  const clickHandler = () => {
    setShowSecond(showSecond?false:true);
    if(showSecond){
      console.log("showing second controller");
    } else {
      console.log("showing first controller");
    }
  }
  return (
    <div className="App">
      <Router>
        <button onClick={clickHandler}>Switch Controller</button>
        {toDisplay}
      </Router>
      {/* <Router>
        <Controller />
      </Router> */}
    </div>
  );
}

export type {AppProps};
export default App;
