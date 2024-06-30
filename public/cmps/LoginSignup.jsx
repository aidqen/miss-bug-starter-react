import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { Login } from './Login.jsx'
import { Signup } from './Signup.jsx'

const { useState } = React

export function LoginSignup({ setUser }) {
  const [loginOrSignup, setLoginOrSignup] = useState('login')
  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
    fullName: '',
  })

  const isLogin = loginOrSignup === 'login'
  const { userName, password, fullName } = credentials

  function handleChange({ target }) {
    const { name: field, value } = target
    setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    isLogin ? login(credentials) : signup(credentials)
  }

  function login(credentials) {
    userService
      .login(credentials)
      .then(setUser)
      .then(() => {
        showSuccessMsg(`Successfully logged into ${fullName}`)
      })
      .catch(err => showErrorMsg('Oops try again'))
    }
    
    function signup(credentials) {
      userService
      .signup(credentials)
      .then(setUser)
      showSuccessMsg(`Successfully Signed Up ${fullName}`)      
      .catch(err => showErrorMsg('Oops try again'))
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
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </React.Fragment>
      )}
      <label htmlFor="userName">Username:</label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={userName}
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

      <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      <button onClick={toggleLogin}>
        {isLogin ? "Don't have a user? Signup" : 'Already have a user? Login'}
      </button>
    </form>
  )
}
