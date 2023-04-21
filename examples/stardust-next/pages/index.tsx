import {
  ProfileContextInitializer,
  ConnectModal,
  client,
  WagmiConfig,
} from "stardust";
import dynamic from "next/dynamic";

export default function Home() {
  // useEffect(() => {}, [])
  return (
    <WagmiConfig client={client}>
      <ProfileContextInitializer>
        <ConnectModal />
      </ProfileContextInitializer>
    </WagmiConfig>
  );
}
