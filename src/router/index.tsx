import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routesMap from './routes'
import { IRouteProps } from './IRoute'

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const InitRouter = () => {
  const getRoutes = (routeMap: IRouteProps[]) => {
    const routes: IRouteProps[] = []
    const getRoute = (routeMap: IRouteProps[]) => {
      routeMap.forEach(config => {
        const { path, component, meta, children } = config
        if (children) {
          getRoute(children)
        } else {
          routes.push({ path, component, meta })
        }
      })
    }
    getRoute(routeMap)
    return routes
  }

  return (
    <Router basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/micro3' : '/'}>
      <Suspense fallback={null}>
        <Routes>
          {getRoutes(routesMap).map((route: IRouteProps) => (
            <Route key={route.path + ''} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default InitRouter
