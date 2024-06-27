export function Login({submitUser, setLoginOrSignup}) {
     
    return (
        <div className="login-container">
      <form onSubmit={submitUser} className="flex flex-column">
 
            <h2>Login/Signup</h2>
            <label>
              User Name:
              <input type="text" name="username" placeholder="Username..." />
            </label>
            <label>
              Password:
              <input type="text" name="password" placeholder="Password..." />
            </label>

        <button>Login</button>
        
      </form>
        <button onClick={() => setLoginOrSignup('signup')}>Don't have an account? <span>Sign Up!</span></button>
    </div>
    )
}