import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts/core'
import { PieChart, PieSeriesOption } from 'echarts/charts' // 系列类型的定义后缀都为 SeriesOption
import { LegendComponent, LegendComponentOption } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import classes from './pie.module.css'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<PieSeriesOption | LegendComponentOption>

// 注册必须的组件
echarts.use([LegendComponent, PieChart, CanvasRenderer])

interface IProps {
  seriesData: any[]
  colorList: string[]
}

const ComPieChart: React.FC<IProps> = props => {
  const chartRef: any = useRef() //拿到DOM容器
  let chartInstance: any = null

  const renderChart = () => {
    const option: ECOption = {
      tooltip: {
        trigger: 'item',
        confine: true,
        position: 'inside',
        formatter: '{b}: {c} ({d}%)',
      },
      color: props.colorList,
      legend: {
        show: false,
      },
      series: [
        {
          type: 'pie',
          radius: ['55%', '75%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: props.seriesData,
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

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} className={classes['chart']}></div>
}

export default ComPieChart
