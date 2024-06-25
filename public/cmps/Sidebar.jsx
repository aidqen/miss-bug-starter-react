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
      <UserMsg />
      <nav>
      <i className="fa-solid fa-house" onClick={navigate('/')}></i>
      <i class="fa-solid fa-bug" onClick={navigate('/bug')}></i>
      <i class="fa-solid fa-exclamation" onClick={navigate('/about')}></i>
      </nav>
    </aside>
  )
}
