import Login from '../Login/Login'
import Home from './Home'

const LoginOrHome = (props: any) => {
  let loh = props.loggedIn ? (
    <Home
      username={props.username}
      nextPageHandler={props.nextPageHandler}
      updateLoggedIn={props.updateLoggedIn}
    />
  ) : (
    <Login
      username={props.username}
      setUsername={props.setUsername}
      nextPageHandler={props.nextPageHandler}
      updateLoggedIn={props.updateLoggedIn}
    />
  )
  return loh
}

export default LoginOrHome
