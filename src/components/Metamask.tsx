import { Tab } from "@headlessui/react";
import { useAccount, useEnsAddress, useEnsName } from "wagmi";
import Connected from "./Connected";
import { shortenAddress } from "../utils/shortenAddress";

const Metamask = () => {
  const { address, isConnecting } = useAccount();
  const { data, isError, isLoading } = useEnsName({ address: address });

  return (
    <>
      <Tab.Panel>
        <div className="flex flex-col items-center">
          <div className="h-20 w-20 rounded-xl mr-1 bg-neutral-200">
            <img src={"src/assets/metamask.svg"} className="h-20 w-20" />
          </div>
          <p className="text-sm mt-3">
            {address && !isLoading
              ? shortenAddress(address)
              : !isError && data
              ? data
              : isConnecting
              ? "Opening Metamask"
              : "Failed to connect"}
          </p>
          <p className="text-xs opacity-50 mt-1">
            {address
              ? ""
              : isConnecting
              ? "Confirm connection in browser extension"
              : "Make sure you have the metamask extension installed and retry"}
          </p>
          {isConnecting ? (
            <img
              src="src/assets/spinner.gif"
              alt="loading"
              className="h-5 w-5 opacity-30 mt-2"
            />
          ) : address ? (
            <Connected />
          ) : null}
        </div>
      </Tab.Panel>
    </>
  );
};

export default Metamask;
