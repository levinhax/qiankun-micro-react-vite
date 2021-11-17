import React, { useEffect, useRef } from 'react'
import Bubbles from './bubble'
import './index.less'
import bubbleData from './data.json'

const Bubble = () => {
  const bubbleRef: any = useRef() //拿到DOM容器

  const triggerClick = (data: any) => {
    console.log('triggerClick: ', data)
  }

  const renderBubbleChart = () => {
    const bubble = new Bubbles(bubbleRef.current, this)
    bubble.setNodes(bubbleData.data || [])
    if (bubbleData.data?.length) {
      triggerClick(bubbleData.data[0])
    }
  }

  useEffect(() => {
    renderBubbleChart()
  }, [])

  return (
    <div className="center-container">
      <div ref={bubbleRef} className="bubble-container" style={{ width: '100%', height: '100%' }}></div>
    </div>
  )
}

export default Bubble
