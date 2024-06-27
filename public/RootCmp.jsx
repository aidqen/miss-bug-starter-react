const Router = ReactRouterDOM.BrowserRouter
const { Route, Routes } = ReactRouterDOM

import { Sidebar } from './cmps/Sidebar.jsx'
import { Home } from './pages/Home.jsx'
import { BugIndex } from './pages/BugIndex.jsx'
import { BugDetails } from './pages/BugDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'

export function App() {
  return (
    <Router>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bug" element={<BugIndex />} />
          <Route path="/bug/:bugId" element={<BugDetails />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  )
}
