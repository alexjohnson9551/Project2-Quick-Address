import Login from "../Login/Login";
import Home from "./Home";

const LoginOrHome = (props: any) => {

    // this is not good programming but it's what I came up with right quick :^)
    // there is probably a better solution for this but I wanted the URLs to be the same in the router

    // logic should be run here to authenticate user login...

    let loh = props.loggedIn ?

        <Home
            username={props.username}
            nextPageHandler={props.nextPageHandler}
            setLoggedIn={props.setLoggedIn} />

        :
        <Login
            username={props.username}
            setUsername={props.setUsername}
            nextPageHandler={props.nextPageHandler}
            loggedIn={props.loggedIn}
            setLoggedIn={props.setLoggedIn}
        />
    return loh;
};

export default LoginOrHome;