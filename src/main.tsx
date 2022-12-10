import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
//import './index.css'
import "antd/dist/antd.css"
import "@ant-design/charts"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

scripts: [
  'https://unpkg.com/react@17/umd/react.production.min.js',
  'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts.min.js',
  //Use organization chart, flowchart, capital flow chart, indentation tree chart to use
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts_g6.min.js',
];


