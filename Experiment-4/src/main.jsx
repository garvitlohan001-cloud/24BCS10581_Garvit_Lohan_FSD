import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CurrencyProvider from './context/CurrencyProvider.jsx'
import ProductProvider from './context/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CurrencyProvider>
  </StrictMode>,
)
