import React, { useState } from 'react'
import ComRingRatioBarChart from '../../components/ringRatioBarChart'
import './chart.css'

// const up = 'path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z'
// const down = 'path://M216.969,292l16.025-3L203,334l-29.994-45,16.041,3,13.961-69Z'

function RingRatioBarChartView() {
  const [chartData] = useState({
    title: '商场人流量变化',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series1Data: [132, 324, 327, 452, 365, 145, 326],
    series2Data: [7.2, -2.6, 4.7, -3.7, -5.4, -0.5, 3.4],
    pathData: ['up', 'down', 'up', 'down', 'down', 'down', 'up'],
    // pathData: [up, down, up, down, down, down, up],
  })

  //   const handleUpdateData = () => {
  //     setChartData({
  //       title: '商场人流量变化',
  //       xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //       series1Data: [132, 324, 327, 452, 365, 145, 326],
  //       series2Data: [7.2, -2.6, 4.7, -3.7, -5.4, -0.5, 3.4],
  //       pathData: ['up', 'down', 'up', 'down', 'down', 'down', 'up'],
  //     })
  //   }

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">通过箭头替代同比环比之类的数据(柱状图)</h2>
      <div className="chart-container">
        <ComRingRatioBarChart
          title={chartData.title}
          xData={chartData.xData}
          series1Data={chartData.series1Data}
          series2Data={chartData.series2Data}
          pathData={chartData.pathData}
        />
      </div>
      {/* <div className="other-container">
        <span onClick={handleUpdateData}>更新数据</span>
      </div> */}
    </div>
  )
}

export default RingRatioBarChartView
