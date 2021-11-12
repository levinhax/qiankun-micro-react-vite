import React from 'react'
// import React, { lazy, Suspense } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import './styles/index.css'
// import { Divider } from 'antd'

import InitRouter from './router'

// import Home from './views/Home'
// const About = lazy(() => import('./views/About'))

// const RouteEle = () => {
//   return (
//     <Router basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro3' : '/'}>
//       <nav style={{ margin: 10 }}>
//         <Link to="/" style={{ padding: 5 }}>
//           Home
//         </Link>
//         <Divider type="vertical" />
//         <Link to="/about" style={{ padding: 5 }}>
//           About
//         </Link>
//       </nav>

//       <Suspense fallback={null}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   )
// }

function App() {
  return (
    <div className="App">
      <InitRouter />
    </div>
  )
}

export default App
