const { NavLink } = ReactRouterDOM
const { useEffect } = React
const { useNavigate } = ReactRouterDOM

import { UserMsg } from './UserMsg.jsx'

export function Sidebar() {
  const navigate = useNavigate()
  useEffect(() => {
    // component did mount when dependancy array is empty
  }, [])

  return (
    <aside>
      {/* <UserMsg /> */}
      <nav>
      <a className='profile-link active' href="#">IM</a>
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to="/bug">
          <i className="fa-solid fa-bug"></i>
        </NavLink>
        <NavLink to="/about">
          <i className="fa-solid fa-exclamation"></i>
        </NavLink>

      </nav>
    </aside>
  )
}
