import React from "react";
import Login from "../Login/Login";
import Home from "./Home";

interface LoginOrHomeProps{
    nextPageHandler: (nextPage:string) => void;
    username:string;
    setUsername:React.Dispatch<React.SetStateAction<string>>;
    loggedIn:boolean;
    setLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginOrHome : React.FC<LoginOrHomeProps> = (props: any) => {

    let nextPageHandler:(nextPage:string) => void                  = props.nextPageHandler;
    let username:string                                            = props.username;
    let setUsername :React.Dispatch<React.SetStateAction<string>>  = props.setUsername;
    let loggedIn:boolean                                           = props.loggedIn;
    let setLoggedIn :React.Dispatch<React.SetStateAction<boolean>> = props.setLoggedIn;


    // this is not good programming but it's what I came up with right quick :^)
    // there is probably a better solution for this but I wanted the URLs to be the same in the router

    // logic should be run here to authenticate user login...

    let loh = props.loggedIn ?

        <Home
            username={username}
            nextPageHandler={nextPageHandler}/>
        :
        <Login
            username={username}
            setUsername={setUsername}
            nextPageHandler={nextPageHandler}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
        />
    return loh;
};

export default LoginOrHome;