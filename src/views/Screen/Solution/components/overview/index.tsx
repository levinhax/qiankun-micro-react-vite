import React, { useState } from 'react'
import classes from './index.module.css'
import sensitiveIcon from '../../../../../assets/screen/solution/sensitive-icon.svg'

type OverviewType = Record<string, any>

const OverView = () => {
  const [OverviewList] = useState([
    {
      name: '数据源数',
      key: 'dataSourceCount',
    },
    {
      name: '数据库数',
      key: 'schemaCount',
    },
    {
      name: '表数',
      key: 'sensitiveTableCount',
      total: 'tableCount',
    },
    {
      name: '列数',
      key: 'sensitiveColumnCount',
      total: 'columnCount',
    },
    {
      name: '已梳理列数',
      key: 'sensitiveCombingColumnCount',
      total: 'combingColumnCount',
    },
    {
      name: '列梳理率',
      key: 'combingPercent',
    },
  ])

  const [OverviewData] = useState<OverviewType>({
    dataSourceCount: 6,
    schemaCount: 8,
    tableCount: 107,
    sensitiveTableCount: 26,
    columnCount: 2888,
    sensitiveColumnCount: 285,
    combingColumnCount: 354,
    sensitiveCombingColumnCount: 285,
    combingPercent: '12%',
  })

  const overviewItems = OverviewList.map((item: any) => (
    <div key={item.key} className={classes['overview-item']}>
      <div className={classes['overview-item-number']}>
        <span className={classes['item-main-number']}>
          {item.key === 'combingPercent' ? OverviewData[item.key] || '0%' : OverviewData[item.key] || 0}
          {item.total && <img className={classes['overview-item-icon']} src={sensitiveIcon} />}
        </span>
        {item.total && <span className={classes['total-number']}>/ {OverviewData[item.total] || 0}</span>}
      </div>
      <p className={classes['overview-item-name']} title={item.name}>
        {item.name}
      </p>
    </div>
  ))

  return <div className={classes['overview-container']}>{overviewItems}</div>
}

export default OverView
