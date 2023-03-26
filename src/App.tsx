import ComponentBuilderSection from "./components/ComponentBuilderSection";
import { useIsMobile } from "./utils/useIsMobile";
import SmallView from "./components/SmallConnectWallet";

import { WagmiConfig } from "wagmi";
import client from "./utils/wagmi";
import ProfileContextInitializer from "./components/ProfileContextInitializer";
import LargeView from "./components/LargeView";

function App() {
  const isMobile = useIsMobile();

  // const value = useMemo(() => ({ profile, setProfile }), [profile, setProfile]);
  return (
    <WagmiConfig client={client}>
      <div className={`flex w-screen h-screen`}>
        <ProfileContextInitializer>
          {!isMobile && <ComponentBuilderSection />}
          {/* status === "connected" ? null :  */}
          {isMobile ? <SmallView /> : <LargeView />}
        </ProfileContextInitializer>
      </div>
    </WagmiConfig>
  );
}

export default App;
