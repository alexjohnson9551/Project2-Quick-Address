import User from "../../models/user";
import Login from "../Login/Login";
import Home from "./Home";
import { useEffect } from 'react';

const LoginOrHome = (props: any) => {

    // let user = props.getLoggedInUser();
    // if (user) {
    //   props.setUsername(user.username);
    //   props.setLoggedIn(true);
    // } else {
    //   alert("not logged in :(");
    //   props.setLoggedIn(false);
    // }

    //checks to see if user is logged in already when component mounts
    //this includes when the router navigates here
    useEffect(() => {
        props.updateLoggedIn();
    }, []);

    let loh = props.loggedIn ?
        <Home
            username={props.username}
            nextPageHandler={props.nextPageHandler}
            updateLoggedIn={props.updateLoggedIn}
            user={props.user}
        />
        :
        <Login
            username={props.username}
            setUsername={props.setUsername}
            nextPageHandler={props.nextPageHandler}
            updateLoggedIn={props.updateLoggedIn}
        />
    return loh;
};

export default LoginOrHome;