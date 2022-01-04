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

const ComThreeDimensionalCylinder: React.FC<IProps> = props => {
  const chartRef: any = useRef() //拿到DOM容器
  let chartInstance: any = null

  const renderChart = () => {
    const { title, xData, seriesData } = props

    const option: ECOption = {
      title: {
        text: title,
        subtext: '纯属虚构',
      },
      backgroundColor: '#061326',
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
            color: '#82b0ec',
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#82b0ec',
            },
          },
          axisLabel: {
            color: '#fff',
            margin: 30,
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
          name: '',
          type: 'pictorialBar',
          symbolSize: [40, 10],
          symbolOffset: [0, -6],
          symbolPosition: 'end',
          z: 12,
          // "barWidth": "0",
          label: {
            show: true,
            position: 'top',
            // "formatter": "{c}%"
            fontSize: 15,
            fontWeight: 'bold',
            color: '#34DCFF',
          },
          color: '#2DB1EF',
          data: seriesData,
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [40, 10],
          symbolOffset: [0, 7],
          // "barWidth": "20",
          z: 12,
          color: '#2DB1EF',
          data: seriesData,
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [50, 15],
          symbolOffset: [0, 12],
          z: 10,
          itemStyle: {
            color: 'transparent',
            borderColor: '#2EA9E5',
            borderType: 'solid',
            borderWidth: 2,
          },
          data: seriesData,
        },
        {
          name: '',
          type: 'pictorialBar',
          symbolSize: [70, 20],
          symbolOffset: [0, 18],
          z: 10,
          itemStyle: {
            color: 'transparent',
            borderColor: '#19465D',
            borderType: 'solid',
            borderWidth: 4,
          },
          data: seriesData,
        },
        {
          type: 'bar',
          //silent: true,
          barWidth: '40',
          barGap: '10%', // Make series be overlap
          barCategoryGap: '10%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
              {
                offset: 0,
                color: '#38B2E6',
              },
              {
                offset: 1,
                color: '#0B3147',
              },
            ]),
            opacity: 0.8,
          },
          data: seriesData,
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

export default ComThreeDimensionalCylinder
