import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import ConnectWalletBtn from "./components/ConnectWalletBtn";
import Connector from "./components/Connector";
import { WagmiConfig } from "wagmi";
import client from "./utils/wagmi";
import Connectors from "./components/Connectors";
import { ConnectorPlaceHolder } from "./components/Connector";

function App() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
      <WagmiConfig client={client}>

      <div className="fixed inset-0 flex items-center justify-center">
        <ConnectWalletBtn openModal={openModal}></ConnectWalletBtn>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[702px] h-[450px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex">
                    <div className="flex-col h-full w-[400px] border-r">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 border-r text-gray-900 p-4 mb-3 border-b"
                      >
                        Connect a Wallet
                      </Dialog.Title>
                      <div className="p-4">
                        <p className="text-neutral-600 text-xs mb-2">Popular</p>
                        {/* <Connector text={"Wallet Connect"} />
                        <Connector text={"Metamask"} />
                        <Connector text={"Coinbase Wallet"} />
                        <Connector text={"Rainbow"} /> */}
                        <Connectors></Connectors>
                        <p className="text-neutral-600 text-xs mt-6 mb-2">
                          Other options
                        </p>
                        <ConnectorPlaceHolder text={"Trust Wallet"} image={"src/assets/trust.png"} />
                        <ConnectorPlaceHolder text={"Argent Wallet"} image={"src/assets/argent.png"} />
                        <ConnectorPlaceHolder text={"Omni Wallet"} image={"src/assets/omni.png"}/>
                        {/* <ConnectorPlaceHolder text={"Ledger live"} /> */}
                      </div>
                    </div>

                    <div className="flex flex-col w-full m-5 divide divide-y divide-neutral-300 justify-center">
                      <div>
                        <h2 className="font-semibold text-[30px] leading-8">
                          Your Journey
                          <br />
                          into web3
                          <br />
                          starts here
                        </h2>
                        <p className="text-xs w-[200px] mt-2 text-neutral-600">
                          Your wallet is the gateway to all things Ethereum, the
                          magical technology that makes it possible to explore
                          web3.
                        </p>
                      </div>
                      <div className="flex justify-between mt-6 py-4">
                        <div className="flex justify-start items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-neutral-300 mr-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                            />
                          </svg>
                          <p>Your first Web3 Wallet</p>
                        </div>
                        <button className="bg-neutral-200 rounded-full text-xs px-2 py-1">
                          Get Started
                        </button>
                      </div>
                      <div className="flex justify-between py-4">
                        <div className="flex justify-start items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-neutral-300 mr-2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                            />
                          </svg>
                          <p>Explore more about Web3</p>
                        </div>
                        <button className="bg-neutral-200 rounded-full text-xs px-2 py-1">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </WagmiConfig>
    );
}

export default App;
