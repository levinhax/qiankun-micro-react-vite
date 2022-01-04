import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import { TreeChart, TreeSeriesOption } from 'echarts/charts' // 系列类型的定义后缀都为 SeriesOption
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
  MarkPointComponent,
  MarkPointComponentOption,
  MarkLineComponent,
  MarkLineComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { echartsResize } from '../../utils/echartsResize'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | TreeSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | MarkPointComponentOption
  | MarkLineComponentOption
  | ToolboxComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent, //
  TooltipComponent,
  GridComponent, //
  LegendComponent, //
  MarkPointComponent, //
  MarkLineComponent, //
  ToolboxComponent, //
  TreeChart,
  CanvasRenderer,
])

interface IProps {
  treeData: any
}

const ComTreeChart: React.FC<IProps> = props => {
  const chartRef: any = useRef() //拿到DOM容器
  let chartInstance: any = null

  const renderChart = () => {
    const { treeData } = props
    treeData.children.forEach(function (datum: any, index: number) {
      // index % 2 === 0 && (datum.collapsed = true)
      index !== 1 && (datum.collapsed = true)
    })

    const option: ECOption = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',

          data: [treeData],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },

          emphasis: {
            focus: 'descendant',
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    }
    const renderedInstance = echarts.getInstanceByDom(chartRef.current)
    if (renderedInstance) {
      chartInstance = renderedInstance
    } else {
      chartInstance = echarts.init(chartRef.current) // echart初始化容器
    }
    chartInstance.setOption(option)

    echartsResize(chartInstance)
  }

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    renderChart()
  }, [props])

  useEffect(() => {
    chartInstance.on('click', function (params: any) {
      console.log(params)
      console.log('当前节点: ', params.name)
      console.log('当前节点 dataIndex: ', params.dataIndex) // 第n个节点，从上往下，父子逐个计算
      console.log('当前节点数据: ', params.data) // 第n个节点，从上往下，父子逐个计算
    })
  }, [])

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
}

export default ComTreeChart
