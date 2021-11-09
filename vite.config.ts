import { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// useDevMode 开启时与热更新插件冲突,使用变量切换
const useDevMode = true

const baseConfig: UserConfig = {
  plugins: [
    // react(),
    ...(
      useDevMode ? [] : [
        react()
      ]
    ),
    // 这里的 'MICRO3_React_APP_VITE' 是子应用名，主应用注册时AppName需保持一致
    // useDevMode = true 则不使用热更新插件，useDevMode = false 则能使用热更新，但无法作为子应用加载。
    qiankun('MICRO3_React_APP_VITE', { useDevMode }),
  ],
  server: {
    port: 9003,
    // open: true,
    proxy: {
			'/api': 'http://localhost:3001',
      '/api/test': {
        changeOrigin: true,
        target: 'http://10.11.32.173:8080/',
        rewrite: (path) => path.replace(/^\/api\/test/, '')
      }
		}
  },
}

export default defineConfig(({ command, mode }) => {
  // console.log('command, mode: ', command, mode)
  // if (command === 'serve') {
  //   return {
  //     // serve 独有配置
  //   }
  // } else {
  //   return {
  //     // build 独有配置
  //   }
  // }

  baseConfig.base = 'http://127.0.0.1:9003/';
  if (mode === 'development') {
    baseConfig.base = '/';
  }
  return baseConfig;
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     // react(),
//     ...(
//       useDevMode ? [] : [
//         react()
//       ]
//     ),
//     // 这里的 'MICRO3_React_APP_VITE' 是子应用名，主应用注册时AppName需保持一致
//     // useDevMode = true 则不使用热更新插件，useDevMode = false 则能使用热更新，但无法作为子应用加载。
//     qiankun('MICRO3_React_APP_VITE', { useDevMode }),
//   ],
//   // 生产环境需要指定运行域名作为base
//   base: 'http://xxx.com/',
//   server: {
//     port: 9003,
//     // open: true,
//     proxy: {
// 			'/api': 'http://localhost:3001',
//       '/api/test': {
//         changeOrigin: true,
//         target: 'http://10.11.32.173:8080/',
//         rewrite: (path) => path.replace(/^\/api\/test/, '')
//       }
// 		}
//   },
// })