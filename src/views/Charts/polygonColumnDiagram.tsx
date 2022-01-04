import React, { useState } from 'react'
import ComPolygonColumnDiagram from '../../components/polygonColumnDiagram'
import './chart.css'

function PolygonColumnDiagramView() {
  const [chartData] = useState({
    title: '考场安排',
    xData: ['一中', '二中'],
    series1Data: [100, 60],
    series2Data: [80, 50],
  })

  return (
    <div className="chart-wrapper line-chart-wrapper">
      <h2 className="title">考场安排(多边体柱图)</h2>
      <div className="chart-container">
        <ComPolygonColumnDiagram
          title={chartData.title}
          xData={chartData.xData}
          series1Data={chartData.series1Data}
          series2Data={chartData.series2Data}
        />
      </div>
      <div className="other-container"></div>
    </div>
  )
}

export default PolygonColumnDiagramView
