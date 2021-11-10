import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'

// vite-plugin-qiankun helper
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

function render(props: any) {
  console.log('------ React 子应用渲染 ------')
  console.log(props)

  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.getElementById('root')
  )
}

renderWithQiankun({
  mount(props) {
    console.log('[react17] vite react app mount')
    render(props)
  },
  bootstrap() {
    console.log('[react17] vite react app bootstrap')
  },
  unmount(props: any) {
    console.log('[react17] vite react app unmount')
    const { container } = props
    const mountRoot = container?.querySelector('#root')
    ReactDOM.unmountComponentAtNode(mountRoot || document.querySelector('#root'))
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('子应用单独运行')
  render({})
}
