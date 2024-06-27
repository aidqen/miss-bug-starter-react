export function Home() {
  return (
    <form onSubmit={submitUser} className="flex flex-column">
      <h2>Login/Signup</h2>
      <label>
        User Name:
        <input type="text" name="username"placeholder="Username..." />
      </label>
      <label>
        Password: 
        <input type="text" name="password" placeholder="Password..." />
      </label>
    </form>
  )
}
