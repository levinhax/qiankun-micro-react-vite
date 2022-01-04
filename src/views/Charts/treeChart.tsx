import React, { useState } from 'react'
import ComTreeChart from '../../components/treeChart'
import './chart.css'
import treeData from './treeChart.json'

function TreeChartView() {
  const [chartData] = useState({
    treeData,
  })

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">树状图</h2>
      <div className="chart-container">
        <ComTreeChart treeData={chartData.treeData} />
      </div>
      {/* <div className="other-container">
        <span onClick={handleUpdateData}>更新数据</span>
      </div> */}
    </div>
  )
}

export default TreeChartView
