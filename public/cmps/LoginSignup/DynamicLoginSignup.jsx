import { Login } from './Login.jsx'
import { Signup } from './Signup.jsx'

const { useState } = React

export function DynamicLoginSignup() {
  const [loginOrSignup, setLoginOrSignup] = useState('login')

  function submitUser(params) {
    return ''
  }

  switch (loginOrSignup) {
    case 'login':
      return <Login submitUser={submitUser} setLoginOrSignup={setLoginOrSignup}/>

    case 'signup':
      return <Signup submitUser={submitUser} setLoginOrSignup={setLoginOrSignup}/>


    default:
      break
  }
}
