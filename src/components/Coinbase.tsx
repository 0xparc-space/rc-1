import { useAccount } from "wagmi";
import { shortenAddress } from "../utils/shortenAddress";
import { ConnectedInsideModal } from "./Connected";
import { useContext } from "react";
import { ProfileContext } from "../utils/ProfileContext";

const Coinbase = () => {
  const { address, isConnecting, isConnected } = useAccount();
  const { profile, setProfile } = useContext(ProfileContext);
  const dark = profile.dark;

  return (
    <>
      {!isConnected && !address ? (
        <div className="flex flex-col items-center">
          <div className="h-20 w-20 rounded-xl mr-1 bg-transparent">
            <img src={"src/assets/coinbase.svg"} className="h-20 w-20" />
          </div>
          <p className="text-sm mt-3">
            {address
              ? shortenAddress(address)
              : isConnecting
              ? "Opening Coinbase"
              : "Failed to connect"}
          </p>
          <p className="text-xs opacity-50 mt-1">
            {address
              ? ""
              : isConnecting
              ? "Confirm connection in browser extension"
              : "Make sure you have the Coinbase extension installed and retry"}
          </p>
          {isConnecting ? (
            <img
              src={
                dark ? "src/assets/white-load.svg" : "src/assets/black-load.svg"
              }
              alt="loading"
              className="h-5 w-5 bg-transparent opacity-60 mt-2"
            />
          ) : address ? (
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
          ) : (
            <ConnectedInsideModal />
          )}
        </div>
      ) : (
        <ConnectedInsideModal />
      )}
    </>
  );
};

export default Coinbase;
