import { useContext } from "react";
import { useAccount, useConnect } from "wagmi";
import ProfileContext from "../utils/ProfileContext";
import ConnectorModels from "../utils/connectorData";
import { shortenAddress } from "../utils/shortenAddress";
import DefaultScreen from "./DefaultScreen";
import { useIsMobile } from "../utils/useIsMobile";
import setURIForWallet from "./ConnectWithQr";

const ViewComponent = () => {
  const {connectors} = useConnect();
  const { address, isConnecting, isConnected, connector } = useAccount();
  const { tab, dark, setProfile } = useContext(ProfileContext);
  const isMobile = useIsMobile();
  const setURI = async()=> {
  if(tab==2){
    await setURIForWallet(connector)
  }
}
  return isConnected || isConnecting ? (
    <>
      {/* back button */}
      {isMobile && (
        <div
          onClick={() => setProfile({ tab: 9 })}
          className="flex m-3 w-10 h-10 p-2 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-40 rounded-full justify-start items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 opacity-90 font-normal text-black dark:text-white "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
      )}
      <div className="w-full p-7 text-black dark:text-white flex flex-col justify-center items-center">
        {/* logo of the connector */}
        <div className="h-20 w-20 rounded-xl mr-1 bg-transparent">
          <img src={ConnectorModels[tab].img} className="h-20 w-20" />
        </div>

        {/* status before connection */}
        <p className="text-sm text-center mt-3">
          {address && isConnected
            ? shortenAddress(address)
            : isConnecting
            ? "Opening "
            : "Failed to connect to "}
          {!isConnected && ConnectorModels[tab].name}
        </p>

        <p className="text-xs text-center opacity-50 mt-1">
          {address && isConnected
            ? ""
            : isConnecting
            ? "Confirm connection"
            : `Make sure you have the ${ConnectorModels[tab].name} extension installed and retry`}
        </p>

        {isConnecting && (
          <img
            className="h-5 w-5 mt-4"
            src={dark ? "assets/white-load.svg" : "assets/black-load.svg"}
          />
        )}

        {isConnected && (
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
        )}
      </div>
    </>
  ) : (
    <DefaultScreen />
  );
};

export default ViewComponent;
