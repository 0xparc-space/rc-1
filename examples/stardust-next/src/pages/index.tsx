// import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { WagmiConfig, createClient } from 'wagmi';
// import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import {  ProfileContextInitializer, ConnectModal, Layout, client } from 'stardust';

// const client = createClient(
//   getDefaultClient({
//     appName: 'ConnectKit Next.js demo',
//     //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
//     //alchemyId:  process.env.NEXT_PUBLIC_ALCHEMY_ID,
//     chains: [mainnet, polygon, optimism, arbitrum],
//   })
// );

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    // <WagmiConfig client={client}>
    //   <ProfileContextInitializer>
    //     <Layout>
    //       {/* <ComponentBuilderSection /> */}
    //       {/* <Component {...pageProps} /> */}

    //       <ConnectModal />
    //     </Layout>
    //   </ProfileContextInitializer>
    // </WagmiConfig>
    <p>Hello</p>
    );
}

export default MyApp;
