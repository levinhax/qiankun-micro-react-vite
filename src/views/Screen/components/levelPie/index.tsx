import React, { useState } from 'react'
import Pie from './pie'
import RotateCicle from '@/components/rotateCircle'
import classes from './index.module.css'

const LevelPie = () => {
  const [colorList] = useState(['#61e596', '#50D7DC', '#61BEE5', '#FABE3D', '#FA893D', '#FB461D'])
  const [chartData] = useState([
    {
      id: 0,
      name: '0级',
      value: 603,
      isShow: false,
    },
    {
      id: 1,
      name: '1级',
      value: 150,
      isShow: true,
    },
    {
      id: 2,
      name: '2级',
      value: 115,
      isShow: true,
    },
    {
      id: 3,
      name: '3级',
      value: 108,
      isShow: true,
    },
    {
      id: 4,
      name: '4级',
      value: 98,
      isShow: true,
    },
  ])
  const [chartTotal] = useState(1288)

  const liItems = chartData.map((item: any, index: number) => {
    return (
      <li className={classes['legend-item']} key={item.id}>
        <div className={classes['legend-ellispe']}>
          <i className={classes['legend-icon']} style={{ background: colorList[index] }}></i>
          <span className={classes['legend-text']} title={`${item.name}：${item.value}`}>
            {item.name}: {item.value}
          </span>
        </div>
        {item.isShow && (
          <div className={classes['legend-sensitive']}>
            <span>敏</span>
          </div>
        )}
      </li>
    )
  })

  return (
    <div className={classes['level-pie-wrapper']}>
      <div className={classes['pie-wrapper']}>
        <div className={classes['pie-chart']}>
          <Pie seriesData={chartData} colorList={colorList} />
        </div>
        <div className={classes['pie-circle']}>
          <RotateCicle />
        </div>
        <div className={classes['center-text']}>
          <p className={classes['center-text-num']}>{chartTotal}</p>
          <p className={classes['center-text-desc']}>数据总量</p>
        </div>
      </div>

      <ul className={classes['legend-wrapper']}>{liItems}</ul>
    </div>
  )
}

export default LevelPie
