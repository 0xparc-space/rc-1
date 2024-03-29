import { Chain, useAccount, useBalance, useEnsName, useNetwork } from "wagmi";
import { shortenAddress } from "../utils/shortenAddress";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AccountModal from "./AccountModal";
import { motion } from "framer-motion";

export const ConnectedInsideModal = () => {
  const { address, connector } = useAccount();

  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-black dark:text-white text-opacity-70">
      <img
        className="h-20 w-20 mb-6"
        src={
          connector
            ? connector.id === "metaMask"
              ? "/src/assets/metamask.svg"
              : connector.id === "coinbaseWallet"
              ? "/src/assets/coinbase.svg"
              : connector.id === "walletConnect"
              ? "/src/assets/walletConnect.svg"
              : ""
            : ""
        }
      />
      <p className="text-sm text-center opacity-80">
        You are now connected to {connector!.name}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-5 h-5 opacity-30 mt-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
      <Connected />
    </div>
  );
};

const Connected = () => {
  const { address } = useAccount();
  const { data: ensName, isError } = useEnsName({ address: address });
  const { data: balance } = useBalance({ address: address });
  const { chains } = useNetwork();

  console.log(ensName);

  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0]);

  const [show, setShow] = useState(false);

  return address ? (
    <div className="flex fixed top-10 right-10 justify-end items-start space-x-3">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative cursor-pointer"
      >
        <Listbox value={selectedChain} onChange={setSelectedChain}>
          <Listbox.Button
            className={
              "relative cursor-pointer w-[160px] pointer-cursor flex justify-between items-center truncate whitespace-nowrap rounded-lg bg-white dark:bg-dark-neutral-0 p-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            }
          >
            <div className="flex w-full justify-start items-center text-black dark:text-white">
              <img src="/assets/Ethereum.svg" className="h-5 w-5 mr-2" />
              {selectedChain.name}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-black dark:text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Listbox.Button>

          <Transition as={Fragment} leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="mt-1 w-full max-h-60 space-y-2 overflow-auto rounded-md dark:bg-dark-neutral-0 bg-white p-3 pl-1 py-4 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {chains.map((chain) => {
                {
                  if (chain !== selectedChain)
                    return (
                      <Listbox.Option
                        className={
                          "p-2 flex justify-start items-center truncate whitespace-nowrap rounded-lg hide-scrollbar cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                        key={chain.id}
                        value={chain}
                        disabled={chain.network === "0"}
                      >
                        <div className="flex w-full justify-start items-center text-black dark:text-white">
                          <img
                            src={`/assets/${chain.network}.svg`}
                            className="h-5 w-5 mr-2"
                          />
                          {chain.name}
                        </div>
                      </Listbox.Option>
                    );
                }
              })}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => setShow(true)}
        className="flex cursor-pointer justify-between h-12 bg-[#EDF0F4] dark:bg-dark-neutral-0 rounded-xl shadow-sm items-center"
      >
        <p className="text-sm font-normal m-2 dark:text-white">{`${Number(
          balance?.formatted
        ).toPrecision(3)} ${balance?.symbol}`}</p>
        <div className="bg-white dark:bg-dark-neutral-200 text-black dark:text-white rounded-xl shadow-sm m-1 p-2">
          {ensName && !isError ? ensName : shortenAddress(address)}
        </div>
      </motion.div>

      <div>
        <AccountModal show={show} setShow={setShow} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Connected;
