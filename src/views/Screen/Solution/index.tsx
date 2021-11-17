import React from 'react'
import TimeSelect from './components/timeSelect'
import ComFrame from './components/frame'
import VisitTrend from './components/visitTrend'
import Bubble from './components/bubble'
import OverView from './components/overview'
import LevelPie from '../components/levelPie'
import classes from './index.module.css'

const Solution = () => {
  return (
    <div className={classes['screen-solution']}>
      <div className={classes['screen-title']}>
        <p>敏感数据解决方案</p>
        <div className={`screen-select ${classes['time-select']}`}>
          <TimeSelect />
        </div>
      </div>

      <div className={classes['screen-body']}>
        <div className={classes['body-top']}>
          {/* 左边部分 */}
          <div className={classes['body-top-side']}>
            <ComFrame propTitle="数据源风险评分" titleSlot={<span>!</span>}>
              {/* <div>水电费</div> */}
              <VisitTrend />
            </ComFrame>
          </div>
          {/* 中间气泡图 */}
          <div className={classes['body-top-center']}>
            <Bubble />
          </div>
          {/* 右边部分 */}
          <div className={classes['body-top-side']}>
            <div className={classes['body-item']}>
              <OverView />
            </div>

            <div className={classes['body-item']}>
              <ComFrame propTitle="数据分级分布TOP5">
                <LevelPie />
              </ComFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
