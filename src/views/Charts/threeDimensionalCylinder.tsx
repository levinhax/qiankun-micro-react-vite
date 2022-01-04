import React, { useState } from 'react'
import ComThreeDimensionalCylinder from '../../components/threeDimensionalCylinder'
import './chart.css'

function ThreeDimensionalCylinderView() {
  const [chartData] = useState({
    title: '商场人流量变化',
    xData: ['本月人流量', '本周人流量', '当日人流量'],
    seriesData: [44200, 12300, 1525],
  })

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">人流量情况(立体柱状图)</h2>
      <div className="chart-container">
        <ComThreeDimensionalCylinder
          title={chartData.title}
          xData={chartData.xData}
          seriesData={chartData.seriesData}
        />
      </div>
      <div className="other-container">
        {/* <span onClick={handleUpdateData}>更新数据</span> */}
        <span>v5.0 pictorialBar borderColor颜色较淡，版本降级之后色彩正常</span>
      </div>
    </div>
  )
}

export default ThreeDimensionalCylinderView
