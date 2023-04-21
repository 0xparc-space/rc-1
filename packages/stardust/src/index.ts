import ComponentBuilderSection from './components/ComponentBuilderSection'
import { useIsMobile } from './utils/useIsMobile'

import { WagmiConfig, useConnect } from 'wagmi'
import client, { defaultClient } from './utils/wagmi'
import ProfileContextInitializer from './components/ProfileContextInitializer'
import ConnectModal from './components/ConnectModal'
import Layout from './components/Layout'
import { TestComponent } from './App'

export {
  defaultClient,
  ProfileContextInitializer,
  client,
  ConnectModal,
  TestComponent,
  WagmiConfig,
}
