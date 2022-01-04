import React, { useEffect, useRef } from 'react'
import { IProps } from './type'
import * as echarts from 'echarts/core'
import { BarChart, BarSeriesOption } from 'echarts/charts' // 系列类型的定义后缀都为 SeriesOption
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
  CanvasRenderer,
])

const color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']

const ComTransverseLineChart: React.FC<IProps> = props => {
  const chartRef: any = useRef() //拿到DOM容器
  let chartInstance: any = null

  const renderChart = () => {
    let lineY = []
    for (var i = 0; i < props.xData.length; i++) {
      var x = i
      if (x > color.length - 1) {
        x = color.length - 1
      }
      var data = {
        name: props.xData[i],
        value: props.seriesData[i],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: color[x] + ', 0.3)',
              },
              {
                offset: 1,
                color: color[x] + ', 1)',
              },
            ],
            false
          ),
          borderRadius: 10,
        },
        // emphasis: {
        //   shadowBlur: 15,
        //   shadowColor: 'rgba(0, 0, 0, 0.1)',
        // },
      }
      lineY.push(data)
    }

    const option: ECOption = {
      title: {
        text: '监测点气温变化',
        subtext: '纯属虚构',
        show: false,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        show: false,
      },
      toolbox: {
        show: false,
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
      grid: {
        top: '10%',
        left: '5%',
        right: '15%',
        bottom: '8%',
      },
      xAxis: [
        {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          data: props.xData,
        },
        {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            inside: false,
            color: '#b3ccf8',
            fontSize: '14',
            fontFamily: 'PingFangSC-Regular',
            formatter: function (val: any) {
              return `${val}k`
            },
          },
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: props.seriesData,
        },
      ],
      series: [
        {
          name: '',
          type: 'bar',
          zlevel: 2,
          barWidth: '16px',
          showBackground: true,
          // data: props.seriesData,
          data: lineY,
          animationDuration: 1500,
          label: {
            color: '#b3ccf8',
            show: true,
            position: [0, '-24px'],
            fontSize: 16,
            formatter: function (a: any) {
              return a.name
            },
          },
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

export default ComTransverseLineChart
