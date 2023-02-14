import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import ConnectWalletBtn from "./components/ConnectWalletBtn";

function App() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[400px] h-[400px] max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center mb-8"
                  >
                    Connect a Wallet
                  </Dialog.Title>
                  <div className="mt-2">
                    <ul>
                      <li className="bg-neutral-200 px-5 py-5 my-2 mt-10 rounded-[10px] hover:bg-gray-300">
                        Metamask
                      </li>
                      <li className="bg-neutral-200 px-5 py-5 my-2 rounded-[10px] hover:bg-gray-300">
                        WalletConnect
                      </li>
                      <li className="bg-neutral-200 px-5 py-5 my-2 rounded-[10px] hover:bg-gray-300">
                        Other Wallets
                      </li>
                    </ul>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default App;
