import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LeaveProvider from './context/LeaveContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LeaveProvider>
      <App />
    </LeaveProvider>
  </StrictMode>,
)
