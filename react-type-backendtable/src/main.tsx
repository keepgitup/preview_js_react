import React from 'react'
import ReactDOM from 'react-dom/client'
//正確的樣式引入順序
//初始化樣式一般放在最前面
import "reset-css"
//UI框架的樣式

//全局樣式 (絕對路徑)
import "@/assets/styles/global.scss"

//組件的樣式
import App from './App.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
