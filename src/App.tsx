import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/index.css'
import { Divider } from 'antd'

import Home from './views/Home'
const About = lazy(() => import('./views/About'))

const RouteEle = () => {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Divider type="vertical" />
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

function App() {
  return (
    <div className="App">
      <RouteEle />
    </div>
  )
}

export default App
