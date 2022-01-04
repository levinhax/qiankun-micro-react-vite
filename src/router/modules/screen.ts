import { lazy } from 'react'
import { IRouteProps } from '../IRoute'

const ScreenSolution = lazy(() => import('../../views/Screen/Solution'))

const routesMap: IRouteProps[] = [
  {
    path: '/screen/solution',
    exact: true,
    component: ScreenSolution,
    meta: {
      requiresAuth: false,
      title: '解决方案',
    },
  },
]

export default routesMap
