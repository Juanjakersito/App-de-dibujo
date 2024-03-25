import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CanvasProvider } from './context/canvasContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CanvasProvider>
    <App />
  </CanvasProvider>,
)
