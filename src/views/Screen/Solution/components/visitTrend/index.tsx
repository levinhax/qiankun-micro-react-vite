import React, { useState } from 'react'
import ComLineChart from '@/views/Screen/components/lineChart'
import classes from './index.module.css'

function VisitTrend() {
  const [chartData] = useState({
    title: '未来一周变化',
    xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    series1Data: [10, 11, 13, 11, 12, 12, 9],
    series2Data: [1, -2, 2, 5, 3, 2, 0],
  })

  return (
    <div className={classes['chart-container']}>
      <ComLineChart
        title={chartData.title}
        xData={chartData.xData}
        series1Data={chartData.series1Data}
        series2Data={chartData.series2Data}
      />
    </div>
  )
}

export default VisitTrend
