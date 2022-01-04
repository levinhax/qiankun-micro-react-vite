import React, { useEffect, useRef } from 'react'
import { IProps } from './type'
import * as echarts from 'echarts/core'
import { BarChart, BarSeriesOption, PictorialBarChart, PictorialBarSeriesOption } from 'echarts/charts' // 系列类型的定义后缀都为 SeriesOption
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

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | PictorialBarSeriesOption
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
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent,
  ToolboxComponent,
  BarChart,
  PictorialBarChart,
  CanvasRenderer,
])

const path = 'path://M214,1079l8-6h16l8,6-8,6H222Z'

const ComPolygonColumnDiagram: React.FC<IProps> = props => {
  const chartRef: any = useRef() //拿到DOM容器
  let chartInstance: any = null

  const renderChart = () => {
    const { title, xData, series1Data, series2Data } = props

    const option: ECOption = {
      title: {
        text: title,
        subtext: '纯属虚构',
        top: 5,
        left: '20%',
        textStyle: {
          fontSize: 18,
          color: '#fff',
        },
      },
      backgroundColor: '#000',
      grid: {
        top: '20%',
        left: '-5%',
        bottom: '5%',
        right: '5%',
        containLabel: true,
      },
      tooltip: {
        show: true,
        // trigger: 'axis',
      },
      animation: false,
      xAxis: [
        {
          type: 'category',
          data: xData,
          axisTick: {
            alignWithLabel: true,
          },
          nameTextStyle: {
            color: '#fff',
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#82b0ec',
            },
          },
          axisLabel: {
            color: '#fff',
            margin: 20,
          },
        },
      ],
      yAxis: [
        {
          show: false,
          type: 'value',
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: '#fff',
            formatter: '{value}%',
          },
          splitLine: {
            lineStyle: {
              color: '#0c2c5a',
            },
          },
        },
      ],
      series: [
        {
          type: 'pictorialBar',
          symbol: path,
          symbolSize: [30, 8],
          symbolOffset: [-20, -5],
          symbolPosition: 'end',
          z: 12,
          color: '#68B4FF',
          data: series1Data,
        },
        {
          type: 'pictorialBar',
          symbol: path,
          symbolSize: [30, 8],
          symbolOffset: [20, -5],
          symbolPosition: 'end',
          z: 12,
          color: '#FFCE69',
          data: series2Data,
        },
        {
          type: 'pictorialBar',
          symbol: path,
          symbolSize: [30, 8],
          symbolOffset: [-20, 5],
          z: 12,
          color: '#68B4FF',
          data: series1Data,
        },
        {
          name: '',
          type: 'pictorialBar',
          symbol: path,
          symbolSize: [30, 8],
          symbolOffset: [20, 5],
          color: '#FFCE69',
          z: 12,
          data: series2Data,
        },
        {
          type: 'bar',
          itemStyle: {
            opacity: 0.7,
          },
          barWidth: '30',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#3D83CD',
            },
            {
              offset: 1,
              color: '#0B3147',
            },
          ]),
          data: series1Data,
        },
        {
          type: 'bar',
          itemStyle: {
            opacity: 0.7,
          },
          barWidth: '30',
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#CC9F49',
            },
            {
              offset: 1,
              color: '#0B3147',
            },
          ]),
          data: series2Data,
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
  }

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    renderChart()
  }, [props])

  useEffect(() => {
    window.addEventListener('resize', () => {
      handleResize()
    })
  }, [])

  const handleResize = () => {
    if (chartInstance) {
      chartInstance.resize()
    }
  }

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
}

export default ComPolygonColumnDiagram
