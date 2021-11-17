import React from 'react'
import classes from './index.module.css'

const Frame = (props: any) => {
  const title = props?.propTitle
  const children = props?.children

  const { titleSlot } = props

  return (
    <div className={classes['screen-item-frame']}>
      <div className={classes['item-title']}>
        <span className={classes['title-text']}>{title}</span>
        <div className={classes['title-slot']}>{titleSlot}</div>
      </div>
      <div className={classes['item-body']}>{children}</div>
    </div>
  )
}

export default Frame
