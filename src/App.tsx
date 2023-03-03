import { useState } from "react";
import { WagmiConfig, useConnect } from "wagmi";
import client from "./utils/wagmi";
import { defaultConnectors, otherConnectors } from "./components/Connectors";
import DefaultScreen from "./components/DefaultScreen";
import ConnectorBox from "./components/Connector";
import { Tab } from "@headlessui/react";
import Metamask from "./components/Metamask";

function WalletConnect() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const [id, setId] = useState(false);

  return (
    <div className=" h-full inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center text-center">
        <Tab.Group>
          <div className="flex max-w-[800px] h-[450px] overflow-hidden rounded-2xl bg-gray-50 text-left align-middle shadow-xl ">
            <div className="flex-col border h-full border-r">
              <div className="text-lg font-medium leading-6 border-r text-gray-900 p-4 mb-1 border-b">
                Connect a Wallet
              </div>
              <div className="p-4">
                <Tab.List>
                  <Tab className="p-0 flex justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 mr-1 opacity-60 font-normal"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </Tab>
                  <p className="text-neutral-600 text-xs mb-2 mt-4">Popular</p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => defaultConnectors.includes(x.id))
                      .map((connector) => (
                        <ConnectorBox connector={connector}></ConnectorBox>
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
                      
                        <ConnectorBox connector={connector}></ConnectorBox>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                </Tab.List>
              </div>
            </div>
            <Tab.Panels className="w-full h-full flex flex-col justify-center m-4">
              <DefaultScreen />
              <Metamask />
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}

function ComponentBuilderSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedMode, setSelectedMode] = useState(0)
  const [selectedRadius, setSelectedRadius] = useState(0)
  const [selectColour, setSelectColor]= useState(0)
  return (
    <div className="w-2/6 h-full">
      <div className="h-fit w-full bg-light-neutral-100">
        <div className="flex p-8 space-x-2">
          <div className="w-fit text-center px-2 py-1 rounded-full bg-light-neutral-300">
            <p className="font-medium">EVM</p>
          </div>
          <div className="w-fit text-center px-2 py-1 rounded-full bg-light-neutral-300">
            <p className="font-medium">Ethereum</p>
          </div>
        </div>
        <div className="px-8">
          <p className="font-bold text-3xl font">Wallet Connect Component</p>
        </div>
        <div className="p-8">
          <p>
            0xStardust is a library of beautifully crafted, ready to use react
            components which are beautiful, functional and robust
          </p>
        </div>
      </div>
      <div className="h-fit w-full">
        <div className="px-8 py-4">
          <p className="font-bold text-lg  py-4">Modal Type</p>
          <div className='space-x-2'>
            <button onClick={() => setSelectedIndex(0)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Large</button>
            <button onClick={() => setSelectedIndex(1)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Compact</button>
          </div>
        </div>
        <div className="px-8 py-4">
          <p className="font-bold text-lg  py-4">Mode</p>
          <div className='space-x-2'>
            <button onClick={() => setSelectedMode(0)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Light</button>
            <button onClick={() => setSelectedMode(1)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Dark</button>
          </div>
        </div>
        <div className="px-8 py-4">
          <p className="font-bold text-lg  py-4">Accent Color</p>
          <div className='space-x-4'>
            <button onClick={() => setSelectColor(0)} className='rounded-full p-2 bg-blue-600 hover:ring-8 hover:ring-blue-100 text-sm'></button>
            <button onClick={() => setSelectColor(1)} className='rounded-full p-2 bg-pink-600 hover:ring-8 hover:ring-pink-100  text-sm'></button>
            <button onClick={() => setSelectColor(2)} className='rounded-full p-2 bg-purple-600 hover:ring-8 hover:ring-purple-100 text-sm'></button>
            <button onClick={() => setSelectColor(3)} className='rounded-full p-2 bg-green-600 hover:ring-8 hover:ring-green-100 text-sm'></button>
            <button onClick={() => setSelectColor(3)} className='rounded-full p-2 bg-yellow-400 hover:ring-8 hover:ring-yellow-100 text-sm'></button>

          </div>
        </div>
        <div className="px-8 py-4">
          <p className="font-bold text-lg py-4">Border Radius</p>
          <div className='space-x-2'>
            <button onClick={() => setSelectedRadius(0)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>None</button>
            <button onClick={() => setSelectedRadius(1)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Small</button>
            <button onClick={() => setSelectedRadius(2)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Medium</button>
            <button onClick={() => setSelectedRadius(3)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Large</button>
          </div>
        </div>
      </div>
    </div>
  )
}
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
