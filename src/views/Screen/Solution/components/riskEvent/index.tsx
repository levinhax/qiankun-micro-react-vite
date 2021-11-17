import React, { useState } from 'react'
import { List } from 'antd'
import classes from './index.module.css'

const RiskEvent = () => {
  const [data] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ])

  return (
    <div className={classes['risk-event-container']}>
      <List dataSource={data} renderItem={item => <List.Item>{item}</List.Item>} />
    </div>
  )
}

export default RiskEvent
