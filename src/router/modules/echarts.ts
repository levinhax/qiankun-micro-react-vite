import { lazy } from 'react'
import { IRouteProps } from '../IRoute'

const LineChart = lazy(() => import('../../views/Charts/lineChart'))
const DynamicBarChart = lazy(() => import('../../views/Charts/dynamicBarChart'))
const ThreeDimensionalCylinder = lazy(() => import('../../views/Charts/threeDimensionalCylinder'))
const PolygonColumnDiagram = lazy(() => import('../../views/Charts/polygonColumnDiagram'))
const RingRatioBarChart = lazy(() => import('../../views/Charts/ringRatioBarChart'))
const TreeChart = lazy(() => import('../../views/Charts/treeChart'))
const TransverseLineChart = lazy(() => import('../../views/Charts/transverseLineChart'))

const routesMap: IRouteProps[] = [
  {
    path: '/echarts/lineChart',
    exact: true,
    component: LineChart,
    meta: {
      requiresAuth: false,
      title: '折线图',
    },
  },
  {
    path: '/echarts/dynamicBarChart',
    exact: true,
    component: DynamicBarChart,
    meta: {
      title: '动态柱状图',
    },
  },
  {
    path: '/echarts/threeDimensionalCylinder',
    exact: true,
    component: ThreeDimensionalCylinder,
    meta: {
      requiresAuth: false,
      title: '立体柱状图',
    },
  },
  {
    path: '/echarts/polygonColumnDiagram',
    exact: true,
    component: PolygonColumnDiagram,
    meta: {
      requiresAuth: false,
      title: '多边体柱图',
    },
  },
  {
    path: '/echarts/ringRatioBarChart',
    exact: true,
    component: RingRatioBarChart,
    meta: {
      title: '同比环比柱状图',
    },
  },
  {
    path: '/echarts/tree',
    exact: true,
    component: TreeChart,
    meta: {
      title: '树状图',
    },
  },
  {
    path: '/echarts/transverseLineChart',
    exact: true,
    component: TransverseLineChart,
    meta: {
      title: '横向柱状图',
    },
  },
]

export default routesMap
