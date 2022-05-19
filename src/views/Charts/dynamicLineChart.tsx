import React, { useState, useEffect } from 'react'
import ComDynamicLineChart from '../../components/dynamicLineChart'
import './chart.css'

function DynamicLineChartView() {
  let now = new Date(2000, 10, 1)
  const oneDay = 24 * 3600 * 1000
  let randomVal = Math.random() * 1000

  const initData = () => {
    const data = []
    for (let i = 0; i < 1000; i++) {
      data.push(randomData())
    }
    return data
  }
  const randomData = () => {
    now = new Date(+now + oneDay)
    randomVal = randomVal + Math.random() * 21 - 10
    return {
      name: now.toString(),
      value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(randomVal)],
    }
  }

  const [chartData, setChartData] = useState<any[]>(() => initData())

  useEffect(() => {
    const tt = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        setChartData(prevState => {
          let stateData = JSON.parse(JSON.stringify(prevState))
          stateData.shift()
          stateData.push(randomData())
          return stateData
        })
      }
    }, 1000)

    return () => clearInterval(tt)
  }, [])

  //   useEffect(() => {
  //     console.log('chartData: ', chartData)
  //   }, [chartData])

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">网络流量(折线图)</h2>
      <div className="chart-container">
        <ComDynamicLineChart seriesData={chartData} />
      </div>
      <div className="other-container"></div>
    </div>
  )
}

export default DynamicLineChartView
