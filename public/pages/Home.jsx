import { LoginSignup } from "../cmps/LoginSignup.jsx";
const { useState } =  React

export function Home() {
  const [user, setUser] = useState(null)

  return <React.Fragment>
    <LoginSignup setUser={setUser}/>
  </React.Fragment>
}
