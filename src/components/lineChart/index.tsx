import React, { useEffect, useRef } from 'react'
import { IProps } from './type'
import * as echarts from 'echarts/core'
import { LineChart, LineSeriesOption } from 'echarts/charts' // 系列类型的定义后缀都为 SeriesOption
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
  | LineSeriesOption
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
  LineChart,
  CanvasRenderer,
])

const ComLineChart: React.FC<IProps> = props => {
  const chartRef: any = useRef() //拿到DOM容器
  let chartInstance: any = null

  const renderChart = () => {
    const option: ECOption = {
      title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        show: true,
        data: ['最高气温', '最低气温'],
        // right: 60,
        // top: 8,
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C',
        },
      },
      series: [
        {
          name: '最高气温',
          type: 'line',
          data: props.series1Data,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' },
            ],
          },
          markLine: {
            data: [{ type: 'average', name: '平均值' }],
          },
        },
        {
          name: '最低气温',
          type: 'line',
          data: props.series2Data,
          markPoint: {
            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: 'average', name: '平均值' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max',
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: '最大值',
                  },
                  type: 'max',
                  name: '最高点',
                },
              ],
            ],
          },
        },
        // blendMode: 'luminosity' // 柱状图重合的颜色，blendMode 混合模式
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

export default ComLineChart
