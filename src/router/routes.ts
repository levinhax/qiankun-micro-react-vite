import { lazy } from 'react'
import { IRouteProps } from './IRoute'

const Home = lazy(() => import('../views/Home'))
const About = lazy(() => import('../views/About'))
const ChartsIndex = lazy(() => import('../views/Charts'))

import screenRoutesMap from './modules/screen'
import echartsRoutesMap from './modules/echarts'
import canvasRoutesMap from './modules/canvas'

const routesMap: IRouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    meta: {
      requiresAuth: false,
      title: '首页',
    },
  },
  {
    path: '/home',
    exact: true,
    component: Home,
    meta: {
      requiresAuth: false,
      title: '首页',
    },
  },
  {
    path: '/about',
    exact: true,
    component: About,
    meta: {
      requiresAuth: false,
      title: '关于',
    },
  },
  {
    path: '/echarts',
    exact: true,
    component: ChartsIndex,
    meta: {
      requiresAuth: false,
      title: '图表',
    },
  },
  ...screenRoutesMap,
  ...echartsRoutesMap,
  ...canvasRoutesMap,
]

export default routesMap
