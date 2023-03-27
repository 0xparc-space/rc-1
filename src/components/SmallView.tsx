import { useAccount, useConnect } from "wagmi";
import ConnectorBox from "./Connector";
import { defaultConnectors, otherConnectors } from "./Connectors";
import DefaultScreen from "./DefaultScreen";
import { useContext } from "react";
import { useIsMobile } from "../utils/useIsMobile";
import ProfileContext from "../utils/ProfileContext";
import clsx from "clsx";
import ViewComponent from "./ViewComponent";

const SmallView = () => {
  const { connectors, error } = useConnect();

  const { tab, dark, setProfile } = useContext(ProfileContext);
  const isMobile = useIsMobile();

  const { connector, isConnected } = useAccount();

  return (
    <>
      <div
        className={clsx("fixed inset-0 overflow-y-auto ", dark ? "dark" : "")}
      >
        <div className="flex min-h-full bg-gray-200 items-end justify-center text-center">
          <div className="flex w-full h-[350px] flex-col justify-center items-start overflow-hidden rounded-t-2xl bg-white align-middle shadow-xl">
            {!isConnected ? (
              <div className="w-full">
                <div className="text-lg font-medium leading-6 outline-b outline-black dark:outline-white outline-opacity-30 p-4 mb-1 border-b border-opacity-10 dark:border-opacity-10 border-black dark:border-white">
                  Connect a Wallet
                </div>
                <div className="p-4">
                  <ul>
                    <li className="p-0 cursor-pointer relative flex justify-start items-center border-0 rounded-full">
                      <div className="flex absolute left-10 top-10 m-4 w-8 h-8 rounded-full bg-white bg-opacity-20 justify-start items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-full h-full g-gray-10 rounded-full p-2  opacity-90 font-normal hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                          />
                        </svg>
                      </div>
                    </li>
                    <p className="text-black dark:text-white opacity-60 text-xs mb-2 mt-4">
                      Popular
                    </p>
                    <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                      {connectors
                        .filter((x) => defaultConnectors.includes(x.id))
                        .map((defaultConnector, idx) => (
                          <button
                            disabled={defaultConnector !== connector}
                            key={idx}
                            onClick={() => setProfile({ tab: idx })}
                            className="p-0 cursor-pointer bg-transparent border-0 outline-none active:border-0 disabled:opacity-50"
                          >
                            <ConnectorBox
                              connector={defaultConnector}
                            ></ConnectorBox>
                          </button>
                        ))}

                      {error && <div>{error.message}</div>}
                    </div>
                    <p className="text-black dark:text-white opacity-60 text-xs mt-6 mb-2">
                      Other options
                    </p>
                    <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                      {connectors
                        .filter((x) => otherConnectors.includes(x.id))
                        .map((otherConnector, idx) => (
                          <button
                            disabled={otherConnector !== connector}
                            key={idx}
                            onClick={() => setProfile({ tab: idx })}
                            className="p-0 cursor-pointer bg-transparent border-0 active:border-0 disabled:opacity-50"
                          >
                            <ConnectorBox
                              connector={otherConnector}
                            ></ConnectorBox>
                          </button>
                        ))}

                      {error && <div>{error.message}</div>}
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              <ViewComponent />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallView;
