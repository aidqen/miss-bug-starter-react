import { AppHeader } from '../cmps/Header/AppHeader.jsx'
import { LoginSignup } from '../cmps/LoginSignup.jsx'
import { showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { BugIndex } from './BugIndex.jsx'

const { useState } = React

export function BugApp() {
  const [user, setUser] = useState(userService.getLoggedinUser())

  function logout() {
    userService
      .logout()
      .then(() => {
        setUser(null)
      })
      .catch(err => showErrorMsg('Oops try again', err))
  }

  return (
    <React.Fragment>
      <AppHeader user={user} logout={logout}/>
      {!user && <LoginSignup setUser={setUser} user={user} />}
      {user && <BugIndex user={user} />}
    </React.Fragment>
  )
}
