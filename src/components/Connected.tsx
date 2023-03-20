import { Chain, useAccount, useEnsName, useNetwork } from "wagmi";
import { shortenAddress } from "../utils/shortenAddress";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AccountModal from "./AccountModal";

const Connected = () => {
  const { address } = useAccount();
  const { data, isLoading, isError } = useEnsName({ address: address });
  const { chain, chains } = useNetwork();

  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0]);
  const [show, setShow] = useState(false);

  return address ? (
    <div className="flex fixed top-10 right-10 justify-end items-start space-x-3">
      <div className="relative">
        <Listbox value={selectedChain} onChange={setSelectedChain}>
          <Listbox.Button
            className={
              "relative w-[120px] cursor-default truncate whitespace-nowrap rounded-lg bg-white p-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            }
          >
            {selectedChain.name}
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="mt-1 w-full max-h-60 space-y-2 p-2 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {chains.map((chain) => (
                <Listbox.Option
                  className={
                    "p-2 truncate whitespace-nowrap rounded-lg hide-scrollbar cursor-pointer hover:bg-gray-100"
                  }
                  key={chain.id}
                  value={chain}
                  disabled={chain.network === "0"}
                >
                  {chain.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
      <div
        onClick={() => setShow(true)}
        className="flex cursor-pointer justify-between h-12 bg-[#EDF0F4] rounded-xl shadow-sm items-center"
      >
        <p className="text-sm font-normal m-2">1.23 ETH</p>
        <div className="bg-white rounded-xl shadow-sm m-1 p-2">
          {data && !isError ? data : shortenAddress(address)}
        </div>
      </div>

      <AccountModal show={show} setShow={setShow} />
    </div>
  ) : (
    <></>
  );
};

export default Connected;
