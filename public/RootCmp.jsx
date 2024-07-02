const Router = ReactRouterDOM.BrowserRouter
const { Route, Routes } = ReactRouterDOM

import { Sidebar } from './cmps/Sidebar.jsx'
import { Home } from './pages/Home.jsx'
import { BugIndex } from './pages/BugIndex.jsx'
import { BugDetails } from './pages/BugDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { BugApp } from './pages/BugApp.jsx'

export function App() {
  return (
    <Router>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bug" element={<BugApp />}></Route>
          <Route path="/bug/:bugId" element={<BugDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <UserMsg />
      </main>
    </Router>
  )
}
