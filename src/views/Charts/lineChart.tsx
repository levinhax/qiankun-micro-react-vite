import React, { useState } from 'react'
import ComLineChart from '../../components/lineChart'
import './chart.css'

function LineChartView() {
  const [chartData, setChartData] = useState({
    title: '未来一周气温变化',
    xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    series1Data: [10, 11, 13, 11, 12, 12, 9],
    series2Data: [1, -2, 2, 5, 3, 2, 0],
  })

  const handleUpdateData = () => {
    setChartData({
      title: '未来一周气温变化',
      xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      series1Data: [10, 10, 15, 16, 12, 12, 9],
      series2Data: [1, -2, 2, 5, 5, 2, 0],
    })
  }

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">未来一周气温变化(折线图)</h2>
      <div className="chart-container">
        <ComLineChart
          title={chartData.title}
          xData={chartData.xData}
          series1Data={chartData.series1Data}
          series2Data={chartData.series2Data}
        />
      </div>
      <div className="other-container">
        <span style={{ cursor: 'pointer' }} onClick={handleUpdateData}>
          更新数据
        </span>
      </div>
    </div>
  )
}

export default LineChartView
