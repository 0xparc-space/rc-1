import ComponentBuilderSection from "./components/ComponentBuilderSection";
import { useIsMobile } from "./utils/useIsMobile";
import SmallConnectWallet from "./components/SmallConnectWallet";

import { useContext, useMemo, useState } from "react";
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

function WalletConnectDark() {
  const { connectors, error } = useConnect();
  const { profile } = useContext(ProfileContext);
  const radius = ["rounded-none", "rounded-md", "rounded-lg", "rounded-2xl"][
    profile.radius
  ];
  return (
    <div className=" h-full inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center text-center">
        <Tab.Group>
          <div
            className={`flex max-w-[800px] h-[450px] overflow-hidden bg-dark-neutral-0 text-left align-middle shadow-xl ${radius}`}
          >
            <div className="flex-col  h-full border-r-dark-neutral-200">
              <div
                className={`text-lg font-medium leading-6 rounded-tl-${radius} outline-r-dark-neutral-200 text-light-neutral-0 p-4 mb-1 border-b-dark-neutral-200`}
              >
                Connect a Wallet
              </div>
              <div className="p-4">
                <Tab.List>
                  <Tab className="p-0 flex justify-start items-center border-0 rounded-full">
                    <div className="flex w-8 h-8 rounded-full bg-gray-100 justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-full h-full g-gray-10 rounded-full p-2  opacity-90 font-normal hover:bg-gray-200 hover:scale-105"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                    </div>
                  </Tab>
                  <p className="text-light-neutral-0 text-xs mb-2 mt-4">
                    Popular
                  </p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => defaultConnectors.includes(x.id))
                      .map((connector) => (
                        <Tab className="p-0 border-0 active:border-0">
                          <ConnectorBox connector={connector}></ConnectorBox>
                        </Tab>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                  <p className="text-light-neutral-0 text-xs mt-6 mb-2">
                    Other options
                  </p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => otherConnectors.includes(x.id))
                      .map((connector) => (
                        <Tab className="p-0 border-0 active:border-0">
                          <ConnectorBox connector={connector}></ConnectorBox>
                        </Tab>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                </Tab.List>
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
  );
}
function WalletConnectLight() {
  const { connectors, error } = useConnect();
  const { profile } = useContext(ProfileContext);
  const radius = ["none", "md", "lg", "2xl"][profile.radius];
  return (
    <div className="h-full inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center w-screen justify-center text-center">
        <Tab.Group>
          <div
            className={`flex w-[650px] h-[450px] overflow-hidden bg-white text-left align-middle shadow-xl rounded-${radius} `}
          >
            <div className="flex-col border-r h-full ">
              <div className="text-lg font-medium leading-6 outline-r text-gray-900 p-4 mb-1 border-b">
                Connect a Wallet
              </div>
              <div className="p-4">
                <Tab.List>
                  <Tab className="p-0 flex justify-start items-center border-0 rounded-full">
                    <div className="flex w-8 h-8 rounded-full bg-gray-100 justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-full h-full g-gray-10 rounded-full p-2  opacity-90 font-normal hover:bg-gray-200 hover:scale-105"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>
                    </div>
                  </Tab>
                  <p className="text-neutral-600 text-xs mb-2 mt-4">Popular</p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => defaultConnectors.includes(x.id))
                      .map((connector) => (
                        <Tab className="p-0 border-0 active:border-0">
                          <ConnectorBox connector={connector}></ConnectorBox>
                        </Tab>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                  <p className="text-neutral-600 text-xs mt-6 mb-2">
                    Other options
                  </p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => otherConnectors.includes(x.id))
                      .map((connector) => (
                        <Tab className="p-0 border-0 active:border-0">
                          <ConnectorBox connector={connector}></ConnectorBox>
                        </Tab>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                </Tab.List>
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
  );
}
function WalletConnect() {
  const { profile, setProfile } = useContext(ProfileContext);

  if (profile.mode == 0) {
    return WalletConnectLight();
  }

  return WalletConnectDark();
}

function App() {
  const isMobile = useIsMobile();

  const [profile, setProfile] = useState({
    radius: 0,
    color: 0,
    mode: 0,
    index: 0,
  });

  const value = useMemo(() => ({ profile, setProfile }), [profile, setProfile]);
  return (
    <WagmiConfig client={client}>
      <div className="flex w-screen h-screen">
        <ProfileContext.Provider value={value}>
          {!isMobile && <ComponentBuilderSection />}

          {isMobile ? <SmallConnectWallet /> : <WalletConnect />}
        </ProfileContext.Provider>
      </div>
    </WagmiConfig>
  );
}

export default App;
