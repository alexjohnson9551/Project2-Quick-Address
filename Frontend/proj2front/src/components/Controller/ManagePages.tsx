import React from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration.lazy';
import {LoggedInNav, LoggedOutNav} from '../Navigation/NavSetup'
import Home from '../Home/Home';
import MapContainer from '../Map/ShowMap';
import AddressFromCode from '../AddressFromCode/AddressFromCode';

const managePages = (props:any) => {

    let nextPageHandler:any = props.nextPageHandler;
    let username:string = props.username;
    let setUsername = props.setUsername;
    let loggedIn:boolean = props.loggedIn;
    let setLoggedIn = props.setLoggedIn;
    let page = props.page;

    let toDisplay = null;

    let Nav = props.loggedIn ? 
    <LoggedInNav nextPageHandler={props.nextPageHandler}/>:
    <LoggedOutNav nextPageHandler={props.nextPageHandler}/>
    
    if (page === "Login") {
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
        toDisplay =
        <div>
            {Nav}
            <Registration />{/* nextPageHandler={props.nextPageHandler} */}
        </div>
    } else if (page === "Home") {
        toDisplay =
        <div>
            {Nav}
            <Home nextPageHandler={props.nextPageHandler} username={username}/>
        </div>
    } else if (page === "Map") {
        toDisplay =
        <div>
            {Nav}
            <MapContainer/>
        </div>
    } else if (page === "Decode") {
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
        toDisplay =null
    }

    return (
        <div>
        {toDisplay}
        </div>
    )
}

export default managePages;