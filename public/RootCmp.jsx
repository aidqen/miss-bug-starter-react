const Router = ReactRouterDOM.BrowserRouter
const { Route, Routes } = ReactRouterDOM

import { Sidebar } from './cmps/Sidebar.jsx'
import { Home } from './pages/Home.jsx'
import { BugDetails } from './pages/BugDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { BugApp } from './pages/BugApp.jsx'
import { BugEdit } from './cmps/BugEdit.jsx'

export function App() {
  return (
    <Router>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bug" element={<BugApp />}>
            <Route path="/bug/add" element={<BugEdit />}/>
            <Route path="/bug/edit/:bugId" element={<BugEdit />}/>
          </Route>
          <Route path="/bug/:bugId" element={<BugDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <UserMsg />
      </main>
    </Router>
  )
}
