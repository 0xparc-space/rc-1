import ComponentBuilderSection from "./components/ComponentBuilderSection";
import { useIsMobile } from "./utils/useIsMobile";
import SmallConnectWallet from "./components/SmallConnectWallet";

import { useContext, useEffect, useMemo, useState } from "react";
import { WagmiConfig, useConnect } from "wagmi";
import client from "./utils/wagmi";
import { defaultConnectors, otherConnectors } from "./components/Connectors";
import DefaultScreen from "./components/DefaultScreen";
import ConnectorBox from "./components/Connector";
import { Tab } from "@headlessui/react";
import Metamask from "./components/Metamask";
import Coinbase from "./components/Coinbase";
import WalletConnectDetail from "./components/WalletConnectDetail";
import { ProfileContext } from "./utils/ProfileContext";
import { disconnect } from '@wagmi/core'


function WalletConnect() {
  const { connectors, error } = useConnect();
  const { profile } = useContext(ProfileContext);
  const radius = ["none", "md", "lg", "2xl"][profile.radius];
  console.log(profile.dark);
  return (
    <div     className="w-4/6 bg-cover bg-no-repeat h-full"
    style={{ backgroundImage: `url(src/assets/banner.png)` }}
  >
    <div
      className={`h-full inset-0 overflow-y-auto ${profile.dark ? "dark" : ""}`}
    >
      <div className="flex min-h-full items-center justify-center text-center">

        <Tab.Group>
          <div
            className={`flex w-[650px] h-[450px] overflow-hidden bg-white text-gray-900 dark:text-white dark:bg-dark-neutral-0 text-left align-middle shadow-xl rounded-${radius} `}
          >
            <div className="flex-col border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10 h-full ">
              <div className="text-lg font-medium leading-6 outline-r outline-black dark:outline-white outline-opacity-30 p-4 mb-1 border-b border-opacity-10 dark:border-opacity-10 border-black dark:border-white">
                Connect a Wallet
              </div>
              <div className="p-4">
                <Tab.List>
                  <Tab className="p-0 flex justify-start items-center border-0 rounded-full">
                    <div className="flex w-8 h-8 rounded-full bg-white bg-opacity-20 justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-full h-full g-gray-10 rounded-full p-2  opacity-90 font-normal hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                    </div>
                  </Tab>
                  <p className="text-black dark:text-white opacity-60 text-xs mb-2 mt-4">
                    Popular
                  </p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => defaultConnectors.includes(x.id))
                      .map((connector, idx) => (
                        <Tab key={idx} className="p-0 border-0 active:border-0">
                          <ConnectorBox connector={connector}></ConnectorBox>
                        </Tab>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                  <p className="text-black dark:text-white opacity-60 text-xs mt-6 mb-2">
                    Other options
                  </p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => otherConnectors.includes(x.id))
                      .map((connector, idx) => (
                        <Tab key={idx} className="p-0 border-0 active:border-0">
                          <ConnectorBox connector={connector}></ConnectorBox>
                        </Tab>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                </Tab.List>
                <button onClick={async ()=> { await disconnect()}}>Disconnect</button>
              </div>
            </div>
            <Tab.Panels className="w-full h-full flex flex-col justify-center m-4">
              <Tab.Panel>
                <DefaultScreen />
              </Tab.Panel>
              <Tab.Panel>
                <Metamask />
              </Tab.Panel>
              <Tab.Panel>
                <Coinbase />
              </Tab.Panel>
              <Tab.Panel>
                <WalletConnectDetail />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
    </div>
  );
}

function App() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (localStorage.theme) {
      if (localStorage.theme === "light")
        setProfile({ ...profile, dark: false });
      if (localStorage.theme === "dark") setProfile({ ...profile, dark: true });
    } else {
      localStorage.theme = "light";
    }
  }, []);

  const [profile, setProfile] = useState({
    radius: 0,
    color: 0,
    dark: true,
    index: 0,
  });

  const value = useMemo(() => ({ profile, setProfile }), [profile, setProfile]);
  return (
    <WagmiConfig client={client}>
      <div className={`flex w-screen h-screen ${profile === 0 ? "dark" : ""}`}>
        <ProfileContext.Provider value={value}>
          {!isMobile && <ComponentBuilderSection />}

          {isMobile ? <SmallConnectWallet /> : <WalletConnect />}
        </ProfileContext.Provider>
      </div>
    </WagmiConfig>
  );
}

export default App;
