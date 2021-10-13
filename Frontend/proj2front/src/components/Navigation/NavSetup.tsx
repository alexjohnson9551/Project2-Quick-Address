import React from "react";
import Navigation from "./Navigation";

interface NavSetupProps {
  nextPageHandler: (nextPage:string) => void;
}

const LoggedInNav : React.FC<NavSetupProps> = (props: any) => {

  const nextPageHandler: (nextPage:string) => void = props.nextPageHandler;

  let loggedInNavButtons = [{ dest: "Home", title: "Home" },
    { dest: "NewAddress", title: "Enter New Address" },
    { dest: "ViewAddress", title: "View Address from Code" },
    { dest: "Logout", title: "Logout" }
  ];

  return (<Navigation
    navButtons={loggedInNavButtons}
    nextPageHandler={nextPageHandler}/>
  )
}

const LoggedOutNav : React.FC<NavSetupProps> = (props: any) => {

  const nextPageHandler: (nextPage:string) => void = props.nextPageHandler;

  let loggedOutNavButtons = [
    { dest: "ViewAddress", title: "View Address from Code" },
    { dest: "Registration", title: "Sign Up" },
    { dest: "Login", title: "Login" }
  ];

  return (
    <Navigation
    navButtons={loggedOutNavButtons}
    nextPageHandler={nextPageHandler}/>
  )
}

const navSetup = () => {
  return(
      <div></div>
  )
}

export default navSetup;
export type {NavSetupProps};
export { LoggedInNav, LoggedOutNav };