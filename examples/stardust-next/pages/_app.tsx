import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import type { AppProps } from 'next/app';

// import { WagmiConfig, createClient, configureChains, useConnect } from 'wagmi'
// import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { ProfileContextInitializer, defaultClient } from 'stardust'
// import { getDefaultProvider } from 'ethers'
// import { publicProvider } from '@wagmi/core/providers/public'
// const { chains, provider, webSocketProvider } = configureChains(
//   [mainnet],
//   [publicProvider()]
// )

// const TestWagmi = () => {
//   const s = useConnect()
//   console.log('result', s)
//   return <></>
// }

// const client = createClient({
//   autoConnect: true,
//   provider,
//   webSocketProvider,
// })
// const client = createClient({
//   autoConnect: true,
//   provider: getDefaultProvider(),
// })
// const client = createClient(defaultClient)
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <WagmiConfig client={client}>
    // {/* {console.log('use connect value is', useConnect())} */}
    // {/* <ProfileContextInitializer> */}
    <Component {...pageProps} />
    // {/* <TestWagmi></TestWagmi> */}
    // {/* </ProfileContextInitializer> */}
    // {/* </WagmiConfig> */}
  )
}
