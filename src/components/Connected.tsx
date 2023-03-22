import { Chain, useAccount, useBalance, useEnsName, useNetwork } from "wagmi";
import { shortenAddress } from "../utils/shortenAddress";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AccountModal from "./AccountModal";

export const ConnectedInsideModal = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center text-black dark:text-white text-opacity-70">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-20 h-20 my-6 animate-pulse"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
      <p className="text-sm font-bold text-center opacity-80">
        You are now connected
      </p>

      <Connected />
    </div>
  );
};

const Connected = () => {
  const { address } = useAccount();
  const { data, isLoading, isError } = useEnsName({ address: address });
  const { data: balance } = useBalance({ address: address });
  const { chain, chains } = useNetwork();

  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0]);

  const [show, setShow] = useState(false);

  return address ? (
    <div className="flex fixed top-10 right-10 justify-end items-start space-x-3">
      <div className="relative">
        <Listbox value={selectedChain} onChange={setSelectedChain}>
          <Listbox.Button
            className={
              "relative w-[160px] flex justify-between items-center cursor-default truncate whitespace-nowrap rounded-lg bg-white dark:bg-dark-neutral-0 p-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            }
          >
            <div className="flex w-full justify-start items-center">
              <img src="/src/assets/Ethereum.svg" className="h-5 w-5 mr-2" />
              {selectedChain.name}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
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
                        <div className="flex w-full justify-start items-center">
                          <img
                            src={`/src/assets/${chain.network}.svg`}
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
      </div>
      <div
        onClick={() => setShow(true)}
        className="flex cursor-pointer justify-between h-12 bg-[#EDF0F4] dark:bg-dark-neutral-0 rounded-xl shadow-sm items-center"
      >
        <p className="text-sm font-normal m-2">{`${Number(
          balance?.formatted
        ).toPrecision(3)} ${balance?.symbol}`}</p>
        <div className="bg-white dark:bg-dark-neutral-200 rounded-xl shadow-sm m-1 p-2">
          {data && !isError ? data : shortenAddress(address)}
        </div>
      </div>

      <div>
        <AccountModal show={show} setShow={setShow} />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Connected;
