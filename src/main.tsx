import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/app.css'
import './styles/screen.less'
import App from './App'

// vite-plugin-qiankun helper
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

let mainAppData = {}

function render(props: any) {
  console.log('------ React 子应用渲染 ------')
  console.log(props)

  mainAppData = props?.mainAppData
  console.log('props mainAppData: ', mainAppData)

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
