import ComponentBuilderSection from "./components/ComponentBuilderSection";
import { useIsMobile } from "./utils/useIsMobile";
import CompactView from "./components/CompactView";

import { WagmiConfig } from "wagmi";
import client from "./utils/wagmi";
import ProfileContextInitializer from "./components/ProfileContextInitializer";
import LargeView from "./components/LargeView";
import { useContext } from "react";
import ProfileContext from "./utils/ProfileContext";
import ConnectModal from "./components/ConnectModal";

function App() {
  const isMobile = useIsMobile();

  return (
    <WagmiConfig client={client}>
      <div className={`flex w-screen h-screen`}>
        <ProfileContextInitializer>
          {!isMobile && <ComponentBuilderSection />}
          {/* status === "connected" ? null :  */}
          <ConnectModal />
        </ProfileContextInitializer>
      </div>
    </WagmiConfig>
  );
}

export default App;
