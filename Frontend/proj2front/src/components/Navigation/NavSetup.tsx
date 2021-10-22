import React from 'react'
import Navigation2 from './Navigation'

const LoggedInNav = (props: any) => {
  let loggedInNavButtons = [
    { dest: 'Home', title: 'Home', add: '/' },
    {
      dest: 'Decode',
      title: 'View Address from Code',
      add: '/View',
    },
    { dest: 'Logout', title: 'Logout', add: '/' },
  ]
  return (
    <Navigation2
      NavButtons={loggedInNavButtons}
      nextPageHandler={props.nextPageHandler}
    />
  )
}

const LoggedOutNav = (props: any) => {
  let loggedOutNavButtons = [
    { dest: 'Decode', title: 'View Address from Code', add: '/View' },
    { dest: 'Registration', title: 'Sign Up', add: '/Registration' },
    { dest: 'Login', title: 'Login', add: '/' },
  ]
  return (
    <Navigation2
      NavButtons={loggedOutNavButtons}
      nextPageHandler={props.nextPageHandler}
    />
  )
}

const navSetup = () => {
  return <div></div>
}
export default navSetup
export { LoggedInNav, LoggedOutNav }
