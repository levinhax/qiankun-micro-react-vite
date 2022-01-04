import React from 'react'
import { useNavigate } from 'react-router-dom'
import echartsRoutesMap from '../../router/modules/echarts'
import './index.less'

function ChartsList() {
  const navigate = useNavigate()

  const renderList = echartsRoutesMap.map(item => {
    return (
      <div className="list-item border1" key={item.path}>
        <h3 onClick={() => handleClick(item)}>{item?.meta?.title}</h3>
      </div>
    )
  })

  const handleClick = (item: any) => {
    navigate(item.path)
  }

  return (
    <div className="charts-list-wrapper">
      <h3 className="title">图表</h3>
      <div className="content">{renderList}</div>
    </div>
  )
}

export default ChartsList
