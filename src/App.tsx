import { WagmiConfig } from "wagmi";
import client from "./utils/wagmi";
import WalletConnect from "./components/WalletConnect";
import ComponentBuilderSection from "./components/ComponentBuilderSection";

function WalletConnectSection() {
  return (
    <div
      className="w-4/6 bg-cover bg-no-repeat h-full"
      style={{ backgroundImage: `url(src/assets/banner.png)` }}
    >
      <WalletConnect></WalletConnect>
    </div>
  )
}


function App() {
  return (
    <WagmiConfig client={client}>
      <div className="flex w-screen h-screen">
        <ComponentBuilderSection></ComponentBuilderSection>

        <WalletConnectSection></WalletConnectSection>
      </div>
    </WagmiConfig>
  )
}

export default App
