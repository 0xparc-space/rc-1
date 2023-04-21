import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
// import {
//   WagmiConfig,
//   createClient,
//   configureChains,
//   mainnet,
//   goerli,
//   useConnect,
// } from 'wagmi'
// import { arbitrum, optimism, polygon } from 'wagmi/chains'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { publicProvider } from 'wagmi/providers/public'

// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
// import { SafeConnector } from 'wagmi/connectors/safe'
// import { LedgerConnector } from 'wagmi/connectors/ledger'

import {
  ProfileContextInitializer,
  defaultClient,
  ConnectModal,
  TestComponent,
  client,
  WagmiConfig,
} from 'stardust'
import { useEffect } from 'react'
// import { getDefaultProvider } from 'ethers'
// import { publicProvider } from '@wagmi/core/providers/public'
// const { chains, provider, webSocketProvider } = configureChains(
//   [mainnet],
//   [publicProvider()]
// )
// const { chains, provider, webSocketProvider } = configureChains(
//   [mainnet, polygon, optimism, arbitrum],
//   [
//     alchemyProvider({ apiKey: 'sKKcDLat6UwxKBOD_6JsjlXL9aM-u0n4' }),
//     publicProvider(),
//   ]
// )
// const client = createClient({
//   logger: {
//     warn: (msg) => console.log(msg),
//   },
//   autoConnect: false,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: 'wagmi',
//       },
//     }),
//     // new WalletConnectConnector({
//     //   chains,
//     //   options: {
//     //     qrcode: false,
//     //     projectId: process.env['WALLET_CONNECT_PROJECT_ID']
//     //       ? process.env['WALLET_CONNECT_PROJECT_ID']
//     //       : '',
//     //     version: '2',
//     //     relayUrl: 'wss://relay.walletconnect.org',
//     //   },
//     // }),
//     new LedgerConnector({
//       chains: [mainnet],
//     }),
//     new SafeConnector({
//       // chains: [mainnet, optimism],
//       options: {
//         allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
//         debug: false,
//       },
//     }),
//     new InjectedConnector({
//       chains,
//       options: {
//         name: 'Injected',
//         shimDisconnect: true,
//       },
//     }),
//   ],
//   provider,
//   webSocketProvider,
// })

// const TestConnect = () => {
//   const res = useConnect()

//   return <div>{JSON.stringify(res)}</div>
// }

export default function Home() {
  // useEffect(() => {}, [])
  return (
    <WagmiConfig client={client}>
      <ProfileContextInitializer>
        <ConnectModal />
      </ProfileContextInitializer>
    </WagmiConfig>
  )
}
