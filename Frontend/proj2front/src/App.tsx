import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Controller from './components/Controller/Controller';
import Registration from './components/Registration/Registration';
import MapContainer from './components/Map/ShowMap';


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

//Example of a simple router...currently not being used
// function Router() {
//   return (
//     <CoolRouter>
//       <div className="CoolRouter">
//         <Switch>
//           <Route path ="/" component={Registration}></Route>
//           <Route path ="/map" component={MapContainer}></Route>
//         </Switch>
//       </div>
//     </CoolRouter>
//   );
// }

export type {AppProps};
export default App;