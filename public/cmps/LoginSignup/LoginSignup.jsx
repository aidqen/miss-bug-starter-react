const { useState } = React

export function LoginSignup({}) {
  const [loginOrSignup, setLoginOrSignup] = useState('login')

  function submitUser(params) {}

  return (
    <div className="login-container">
      <form onSubmit={submitUser} className="flex flex-column">
        {loginOrSignup && (
          <React.Fragment>
            <h2>Login/Signup</h2>
            <label>
              User Name:
              <input type="text" name="username" placeholder="Username..." />
            </label>
            <label>
              Password:
              <input type="text" name="password" placeholder="Password..." />
            </label>
          </React.Fragment>
        )}
      </form>

      <div className="login-or-signup">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  )
}

function DynamicLoginSignup(loginOrSignup) {
    switch (loginOrSignup) {
        case 'login':
            
            break;
        case 'signup':
            
            break;
    
        default:
            break;
    }
}