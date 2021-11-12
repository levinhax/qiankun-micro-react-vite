import { lazy } from 'react'
import { IRouteProps } from './IRoute'

const Home = lazy(() => import('../views/Home'))
const About = lazy(() => import('../views/About'))

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
    path: '/about',
    exact: true,
    component: About,
    meta: {
      requiresAuth: false,
      title: '关于',
    },
  },
]

export default routesMap
