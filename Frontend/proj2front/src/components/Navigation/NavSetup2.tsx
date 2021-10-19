import React from 'react'
import Navigation2 from './Navigation2'

const LoggedInNav2 = (props: any) => {
  let loggedInNavButtons = [
    { dest: 'Home', title: 'Home', add: '/' },
    { dest: 'Map', title: 'Map Test', add: '/Map' },
    {
      dest: 'Decode',
      title: 'View Address from Code',
      add: '/View/3',
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

const LoggedOutNav2 = (props: any) => {
  let loggedOutNavButtons = [
    { dest: 'Decode', title: 'View Address from Code', add: '/View/3' },
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

const navSetup2 = () => {
  return <div></div>
}
export default navSetup2
export { LoggedInNav2, LoggedOutNav2 }
