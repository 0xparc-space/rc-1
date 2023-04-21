import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import client from './utils/wagmi'
import { WagmiConfig } from 'wagmi'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
)
