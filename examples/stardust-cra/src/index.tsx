import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// const inter = Inter({ subsets: ['latin'] })
import {
  createClient,
  configureChains,
  mainnet,
  goerli,
  useConnect,
} from 'wagmi'
import {
  client,
  WagmiConfig,
  ConnectModal,
  ProfileContextInitializer,
} from 'stardust'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ProfileContextInitializer>
        <ConnectModal />
      </ProfileContextInitializer>
    </WagmiConfig>
  </React.StrictMode>
)
reportWebVitals()