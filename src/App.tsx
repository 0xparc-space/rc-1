import ComponentBuilderSection from "./components/ComponentBuilderSection";
import { useIsMobile } from "./utils/useIsMobile";
import SmallView from "./components/SmallView";

import { WagmiConfig } from "wagmi";
import client from "./utils/wagmi";
import ProfileContextInitializer from "./components/ProfileContextInitializer";
import LargeView from "./components/LargeView";
import { useContext } from "react";
import ProfileContext from "./utils/ProfileContext";

function App() {
  const isMobile = useIsMobile();

  const profile = useContext(ProfileContext);

  // const value = useMemo(() => ({ profile, setProfile }), [profile, setProfile]);
  return (
    <WagmiConfig client={client}>
      <div className={`flex w-screen h-screen`}>
        <ProfileContextInitializer>
          {!isMobile && <ComponentBuilderSection />}
          {/* status === "connected" ? null :  */}
          {isMobile || profile.index === 1 ? <SmallView /> : <LargeView />}
        </ProfileContextInitializer>
      </div>
    </WagmiConfig>
  );
}

export default App;
