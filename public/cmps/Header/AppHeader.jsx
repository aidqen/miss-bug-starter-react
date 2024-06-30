import { BugsHeaderTools } from './BugsHeaderTools'

export function AppHeader({ user }) {
  console.log(user)
  return (
    <React.Fragment>
      <header className="app-header flex flex-row justify-between align-center">
        <div className="personal-info flex flex-row">
          <h2>
            {user ? (
              <React.Fragment>
                Welcome back,<span>{user.fullname}</span>
              </React.Fragment>
            ) : (
              'Welcome'
            )}
          </h2>
          {user ? <button>Log out</button> : <button>Log in</button>}
        </div>
        {user && <BugsHeaderTools />}
      </header>
    </React.Fragment>
  )
}
