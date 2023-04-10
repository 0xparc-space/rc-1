import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient } from 'wagmi';
// import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import {  ProfileContextInitializer, ConnectModal, Layout, client } from 'stardust';

export default function App({ Component, pageProps }: AppProps) {
  console.log('yo')
  return (
    // <WagmiConfig client={client}>
      <ProfileContextInitializer> 
        <Component />
      </ProfileContextInitializer>
    // </WagmiConfig>
  );}
