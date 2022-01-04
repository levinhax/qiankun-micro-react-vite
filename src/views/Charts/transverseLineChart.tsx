import React, { useState } from 'react'
import ComTransverseLineChart from '../../components/transverseLineChart'
import './chart.css'

function TransverseLineChartView() {
  const [chartData, setChartData] = useState({
    title: '监测点气温变化',
    xData: ['1号点', '2号点', '3号点', '4号点', '5号点', '6号点', '7号点'],
    seriesData: [10, 11, 13, 11, 12, 12, 9],
  })

  const handleUpdateData = () => {
    setChartData({
      title: '监测点气温变化',
      xData: ['1号点', '2号点', '3号点', '4号点', '5号点', '6号点', '7号点'],
      seriesData: [10, 10, 15, 16, 12, 12, 9],
    })
  }

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">排行榜(横向柱状图)</h2>
      <div className="chart-container">
        <ComTransverseLineChart title={chartData.title} xData={chartData.xData} seriesData={chartData.seriesData} />
      </div>
      <div className="other-container">
        <span onClick={handleUpdateData}>更新数据</span>
      </div>
    </div>
  )
}

export default TransverseLineChartView
