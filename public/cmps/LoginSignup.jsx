import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { Login } from './Login.jsx'
import { Signup } from './Signup.jsx'

const { useState } = React

export function LoginSignup({ setUser, user }) {
  const [loginOrSignup, setLoginOrSignup] = useState('login')
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    fullname: '',
  })

  const isLogin = loginOrSignup === 'login'
  const { username, password, fullname } = credentials

  function handleChange({ target }) {
    const { name: field, value } = target
    setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    isLogin ? login(credentials) : signup(credentials)
  }

  function login(credentials) {
    console.log('credentials:', credentials)
    userService
      .login(credentials)
      .then(setUser)
      .then(() => {
        showSuccessMsg(`Successfully logged into ${fullname}`)
      })
      .catch(err => showErrorMsg('Oops try again', err))
  }

  function signup(credentials) {
    userService.signup(credentials).then(setUser)
    showSuccessMsg(`Successfully Signed Up ${fullname}`).catch(err =>
      showErrorMsg('Oops try again', err)
    )
  }

  function toggleLogin(ev) {
    ev.preventDefault()
    setLoginOrSignup(isLogin ? 'signup' : 'login')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="login-signup-form flex flex-column"
    >
      {!isLogin && (
        <React.Fragment>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={handleChange}
          />
        </React.Fragment>
      )}
      <label htmlFor="username">username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button type="submit" onClick={handleSubmit}>{isLogin ? 'Login' : 'Signup'}</button>
      <button onClick={toggleLogin}>
        {isLogin ? "Don't have a user? Signup" : 'Already have a user? Login'}
      </button>
    </form>
  )
}
