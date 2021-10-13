import React from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import {LoggedInNav, LoggedOutNav} from '../Navigation/NavSetup'
import Home from '../Home/Home';
//import MapContainer from '../Map/ShowMap';
import AddressFromCode from '../AddressFromCode/AddressFromCode';
import MyGoogleMap from '../Map/MyGoogleMaps';
import { Redirect, Route, Switch } from 'react-router';
import {useHistory} from 'react-router-dom';

interface ManagePagesProps{
    page:string;
    nextPageHandler: (nextPage:string) => void;
    username:string;
    setUsername:React.Dispatch<React.SetStateAction<string>>;
    loggedIn:boolean;
    setLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
}

const ManagePages : React.FC<ManagePagesProps> = (props:any) => {

    const theHistory = useHistory();

    let page:string                                                = props.page;
    let nextPageHandler:(nextPage:string) => void                  = props.nextPageHandler;
    let username:string                                            = props.username;
    let setUsername :React.Dispatch<React.SetStateAction<string>>  = props.setUsername;
    let loggedIn:boolean                                           = props.loggedIn;
    let setLoggedIn :React.Dispatch<React.SetStateAction<boolean>> = props.setLoggedIn;

    let toDisplay :JSX.Element = <div></div>;

    let Nav = props.loggedIn ? 
    <LoggedInNav nextPageHandler={props.nextPageHandler}/> : 
    <LoggedOutNav nextPageHandler={props.nextPageHandler}/>
    
    if (page === "Login") {
        theHistory.push('login');
        toDisplay =
        <div>
            {Nav}
            <Login
            username={username}
            setUsername={setUsername}
            nextPageHandler={nextPageHandler}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            />
        </div>
    } else if (page === "Registration") {
        theHistory.push('register');
        toDisplay =
        <div>
            {Nav}
            <Registration nextPageHandler={nextPageHandler}/>
        </div>
    } else if (page === "Home") {
        theHistory.push('home')
        toDisplay =
        <div>
            {Nav}
            <Home 
            nextPageHandler={nextPageHandler}
            username={username}/>
        </div>
    } else if (page === "NewAddress") {
        theHistory.push('new_address')
        toDisplay =
        <div className="main-wrapper">
            {Nav}
            <div className="main-wrapper">
                <MyGoogleMap />
            </div>
        </div>
    } else if (page === "ViewAddress") {
        theHistory.push('view_address')
        toDisplay =
        <div>
            {Nav}
            <AddressFromCode/>
        </div>
    }else if (page === "Logout") {
        setLoggedIn(false);
        page="Login";
        nextPageHandler("Login");
        //alert("Logged out.");
        toDisplay =<div></div>
    }

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    {toDisplay}
                </Route>
                <Route exact path='/view_address'>
                    {toDisplay}
                </Route>
                <Route exact path='/new_address'>
                    {toDisplay}
                </Route>
                <Route exact path='/register'>
                    {toDisplay}
                </Route>
                <Route exact path='/login'>
                    {toDisplay}
                </Route>
                <Route exact path='/home'>
                    {toDisplay}
                </Route>
                <Route exact path='/'>
                    {toDisplay}
                </Route>
                <Route path="/">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        
        </div>
    )
}

export type {ManagePagesProps};
export default ManagePages;