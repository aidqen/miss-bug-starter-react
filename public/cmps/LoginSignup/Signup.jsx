export function Signup({submitUser, setLoginOrSignup}) {
     
    return (
        <div className="login-container">
        <form onSubmit={submitUser} className="flex flex-column">
              <h2>Signup</h2>
              <label>
                Full Name:
                <input type="text" name="fullName" placeholder="Fullname..."/>
              </label>
              <label>
                User Name:
                <input type="text" name="username" placeholder="Username..." />
              </label>
              <label>
                Password:
                <input type="text" name="password" placeholder="Password..." />
              </label>
          <button>Sign Up</button>
        </form>
  
          <button onClick={() => setLoginOrSignup('login')}>Already have an account? <span>Log In!</span></button>
      </div>
    )
}