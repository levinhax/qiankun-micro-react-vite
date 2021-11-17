import React from 'react'
import logo from '../../assets/svg/logo.svg'
import classes from './index.module.css'

const NoData = () => {
  return (
    <div className={classes['no-data-container']}>
      <img src={logo} alt="暂无数据" />
      <p>暂无数据</p>
    </div>
  )
}

export default NoData
