import ComponentBuilderSection from "./components/ComponentBuilderSection";
import { useIsMobile } from "./utils/useIsMobile";

import { WagmiConfig } from "wagmi";
import client from "./utils/wagmi";
import ProfileContextInitializer from "./components/ProfileContextInitializer";
import ConnectModal from "./components/ConnectModal";
import Layout from "./components/Layout";

function App() {
  // const isMobile = useIsMobile();

  return (
    <WagmiConfig client={client}>
      <ProfileContextInitializer>
        <Layout>
          {/* <ComponentBuilderSection /> */}
          <ConnectModal />
        </Layout>
      </ProfileContextInitializer>
    </WagmiConfig>
  );
}

export default App;
