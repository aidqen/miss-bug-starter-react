import { Login } from './Login.jsx'
import { Signup } from './Signup.jsx'

const { useState } = React

export function DynamicLoginSignup() {
  const [loginOrSignup, setLoginOrSignup] = useState('login')
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    fullName: '',
  })

  function handleChange({ target }) {
    const { name: field, value } = target
    setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
  }

  function handleSubmit({target}) {
    console.log(target);
    return ''
  }

  return (
    <form onSubmit={handleSubmit} className='login-signup-form flex flex-column'>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
      <button
        onClick={() =>
          setLoginOrSignup(loginOrSignup === 'login' ? 'signup' : 'login')
        }>
        {loginOrSignup === 'login' ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </form>
  )
}
