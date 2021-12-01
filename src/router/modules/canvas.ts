import { lazy } from 'react'
import { IRouteProps } from '../IRoute'

const ScratchCards = lazy(() => import('../../views/Canvas/scratchCards'))

const routesMap: IRouteProps[] = [
  {
    path: '/canvas/scratchCards',
    exact: true,
    component: ScratchCards,
    meta: {
      requiresAuth: false,
      title: '刮刮乐',
    },
  },
]

export default routesMap
