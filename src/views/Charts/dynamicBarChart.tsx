import React, { useState, useEffect } from 'react'
import ComBarChart from '../../components/barChart'
import './chart.css'

function DynamicBarChartView() {
  const [chartData, setChartData] = useState({
    title: '动态排序柱状图',
    xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    series1Data: [10, 11, 13, 11, 12, 12, 9],
    series1Name: '系列1',
  })

  useEffect(() => {
    const tt = setInterval(() => {
      setChartData(prevState => {
        let stateData = JSON.parse(JSON.stringify(prevState))
        stateData.xData = [...stateData.xData.slice(1), 'H']
        stateData.series1Data = [...stateData.series1Data.slice(1), Math.floor(Math.random() * 10) + 2]
        return stateData
      })
    }, 2500)

    return () => clearInterval(tt)
  }, [])

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">动态排序柱状图(柱状图)</h2>
      <div className="chart-container">
        <ComBarChart
          title={chartData.title}
          xData={chartData.xData}
          series1Data={chartData.series1Data}
          series1Name={chartData.series1Name}
        />
      </div>
      <div className="other-container"></div>
    </div>
  )
}

export default DynamicBarChartView
