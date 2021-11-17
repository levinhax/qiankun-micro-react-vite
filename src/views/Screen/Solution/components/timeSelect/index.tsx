import React, { useState } from 'react'
import { Select } from 'antd'
import classes from './index.module.css'

const { Option } = Select

const TimeSelect = () => {
  const [TimeRangeList] = useState([
    {
      title: '24小时',
      value: '24h',
    },
    {
      title: '最近7天',
      value: '7d',
    },
    {
      title: '本日',
      value: '0d',
    },
    {
      title: '本周',
      value: '0w',
    },
    {
      title: '本月',
      value: '0m',
    },
  ])

  const optionItems = TimeRangeList.map(item => (
    <Option key={item.value} value={item.value}>
      {item.title}
    </Option>
  ))

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  return (
    <div className={classes['time-select-container']}>
      <span>时间范围：</span>
      <Select
        defaultValue="24h"
        dropdownClassName="screen-select-dropdown"
        style={{ width: '100%' }}
        onChange={handleChange}
      >
        {optionItems}
      </Select>
    </div>
  )
}

export default TimeSelect
