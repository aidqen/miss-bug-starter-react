import { BugsHeaderTools } from './BugsHeaderTools.jsx'

export function AppHeader({ user, logout }) {
  console.log(user)
  return (
    <React.Fragment>
      <header className="app-header flex flex-row justify-between align-center">
        {user && (
          <React.Fragment>
            <div className="personal-info flex flex-row">
              <h2>
                <React.Fragment>
                  Welcome back,<span>{user.fullname}</span>
                </React.Fragment>
              </h2>
              <button onClick={logout}>Log out</button>
            </div>
            <BugsHeaderTools />
          </React.Fragment>
        )}
      </header>
    </React.Fragment>
  )
}
