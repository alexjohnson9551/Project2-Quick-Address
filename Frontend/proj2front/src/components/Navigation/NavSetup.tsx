import React from "react";
import Navigation from "./Navigation";

const LoggedInNav = (nextPageHandler: any) => {
    let loggedInNavButtons = [{ dest: "Home", title: "Home" },
  { dest: "Map", title: "Enter New Address" },
  { dest: "Decode", title: "View Address from Code" },
  { dest: "Logout", title: "Logout" }];
  return (<Navigation
    NavButtons={loggedInNavButtons}
    nextPageHandler={nextPageHandler}/>
  )
}

const LoggedOutNav = (nextPageHandler: any) => {
    let loggedOutNavButtons = [
      { dest: "Decode", title: "View Address from Code" },
      { dest: "Registration", title: "Sign Up" },
      { dest: "Login", title: "Login" }];
    return (
  <Navigation
  NavButtons={loggedOutNavButtons}
  nextPageHandler={nextPageHandler}/>
    )
}

const navSetup = () => {
    return(
        <div></div>
    )
}
export default navSetup;
export { LoggedInNav, LoggedOutNav };