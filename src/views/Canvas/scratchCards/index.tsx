import React, { useRef, useEffect, useState } from 'react'
import classes from './index.module.css'

const ScratchCards = () => {
  const canvasRef: any = useRef()
  const [isDrawing, setIsDrawing] = useState(false)

  const drawCanvas = () => {
    const ctx = canvasRef.current.getContext('2d')
    // 填充的颜色
    ctx.fillStyle = 'darkgray'
    // 填充矩形 fillRect(起始X,起始Y,终点X,终点Y)
    ctx.fillRect(0, 0, 400, 150)
    ctx.fillStyle = '#fff'
    ctx.font = '18px Arial'
    // 绘制填充文字
    ctx.fillText('刮刮卡', 180, 55)
  }

  const handleOnMouseDown = (e: any) => {
    e.preventDefault()
    setIsDrawing(true)
  }

  const handleOnMouseUp = () => {
    setIsDrawing(false)
  }

  const handleOnMouseMove = (e: any) => {
    if (!isDrawing) return
    const ctx = canvasRef.current.getContext('2d')

    ctx.beginPath()

    // 计算鼠标在canvas里的位置
    const x = e.pageX - canvasRef.current.offsetLeft
    const y = e.pageY - canvasRef.current.offsetTop

    ctx.beginPath()
    // 设置globalCompositeOperation
    ctx.globalCompositeOperation = 'destination-out'
    // 画圆
    ctx.arc(x, y, 10, 0, 2 * Math.PI)
    // 填充圆形
    ctx.fill()
  }

  useEffect(() => {
    drawCanvas()
  }, [])

  return (
    <div className={classes['scratch-cards-wrapper']}>
      <canvas
        ref={canvasRef}
        id="canvas"
        width="400"
        height="120"
        className={classes['canvas-wrapper']}
        onMouseDown={e => handleOnMouseDown(e)}
        onMouseUp={() => handleOnMouseUp()}
        onMouseMove={e => handleOnMouseMove(e)}
      ></canvas>
      <div className={classes['text']}>恭喜您获得100w</div>
    </div>
  )
}

export default ScratchCards
