import ComponentBuilderSection from './components/ComponentBuilderSection'
import { useIsMobile } from './utils/useIsMobile'

import { WagmiConfig, useConnect } from 'wagmi'
import client from './utils/wagmi'
import ProfileContextInitializer from './components/ProfileContextInitializer'
import ConnectModal from './components/ConnectModal'
import Layout from './components/Layout'
export const TestComponent = () => {
  const res = useConnect()
  console.log('res is', res)
  return <></>
}
function App() {
  // const isMobile = useIsMobile();

  return (
    <WagmiConfig client={client}>
      <ProfileContextInitializer>
        <Layout>
          <ComponentBuilderSection />
          <TestComponent></TestComponent>
          <ConnectModal />
        </Layout>
      </ProfileContextInitializer>
    </WagmiConfig>
  )
}

export default App
