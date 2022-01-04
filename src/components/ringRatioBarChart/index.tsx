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
import { echartsResize } from '../../utils/echartsResize'

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

// 定义两个上下箭头的矢量路径
const up = 'path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z'
const down = 'path://M216.969,292l16.025-3L203,334l-29.994-45,16.041,3,13.961-69Z'

const symbolMap = new Map()
symbolMap.set('up', up)
symbolMap.set('down', down)
// const symbolMap = {
//   up,
//   down,
// }

const ComRingRatioBarChart: React.FC<IProps> = props => {
  const chartRef: any = useRef() //拿到DOM容器
  let chartInstance: any = null

  const renderChart = () => {
    const option: ECOption = {
      title: {
        text: '商场人流量',
        subtext: '纯属虚构',
      },
      color: ['#3398DB'], // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从默认值列表中取颜色作为系列颜色。
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow', // 坐标轴指示器，默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        containLabel: true,
      },
      legend: {
        show: false,
      },
      //   toolbox: {
      //     show: false,
      //     feature: {
      //       dataZoom: {
      //         yAxisIndex: 'none',
      //       },
      //       dataView: { readOnly: false },
      //       magicType: { type: ['line', 'bar'] },
      //       restore: {},
      //       saveAsImage: {},
      //     },
      //   },
      xAxis: {
        type: 'category',
        data: props.xData,
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '',
          type: 'pictorialBar',
          //   symbol: function (data, params) {
          //     // console.log(data, params)
          //     // console.log(symbolMap.get(props.pathData[params.dataIndex]))
          //     // return symbolMap.get(props.pathData[params.dataIndex])
          //     return props.pathData[params.dataIndex]
          //   },
          // symbol: 'image://' + paperDataURI,
          symbolSize: [20, 30],
          symbolOffset: [0, -40],
          color: 'orange',
          symbolPosition: 'end',
          label: {
            show: true,
            position: 'top',
            formatter: function (params) {
              return props.series2Data[params.dataIndex].toString()
            },
            fontSize: 30,
            fontWeight: 'bold',
            color: '#34DCFF',
          },
          // data: props.series1Data,
          data: [
            {
              value: props.series1Data[0],
              //   symbol: props.pathData[0],
              symbol: symbolMap.get(props.pathData[0]),
            },
            {
              value: props.series1Data[1],
              // symbol: props.pathData[1],
              symbol: symbolMap.get(props.pathData[1]),
            },
            {
              value: props.series1Data[2],
              // symbol: props.pathData[2],
              symbol: symbolMap.get(props.pathData[2]),
            },
            {
              value: props.series1Data[3],
              // symbol: props.pathData[3],
              symbol: symbolMap.get(props.pathData[3]),
            },
            {
              value: props.series1Data[4],
              // symbol: props.pathData[4],
              symbol: symbolMap.get(props.pathData[4]),
            },
            {
              value: props.series1Data[5],
              // symbol: props.pathData[5],
              symbol: symbolMap.get(props.pathData[5]),
            },
            {
              value: props.series1Data[6],
              // symbol: props.pathData[6],
              symbol: symbolMap.get(props.pathData[6]),
            },
          ],
        },
        {
          name: '人流量',
          type: 'bar',
          barWidth: '40%',
          data: props.series1Data,
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

    // 图表自适应
    echartsResize(chartInstance)
  }

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    renderChart()
  }, [props])

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>
}

export default ComRingRatioBarChart
