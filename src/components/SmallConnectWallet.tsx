import { Tab } from "@headlessui/react";
import { useConnect } from "wagmi";
import ConnectorBox from "./Connector";
import { defaultConnectors, otherConnectors } from "./Connectors";
import DefaultScreen from "./DefaultScreen";
import Metamask from "./Metamask";
import { useEffect, useState } from "react";
import { useIsMobile } from "../utils/useIsMobile";

const SmallConnectWallet = () => {
  const { connectors, error } = useConnect();
  // TODO selectedTab is the string state value for the selected Connector
  const [selectedTab, setSelectedTab] = useState("home");
  const isMobile = useIsMobile();

  useEffect(() => console.log(selectedTab));
  return (
    <>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full bg-gray-200 items-end justify-center text-center">
          <div className="flex w-full overflow-hidden rounded-t-2xl bg-white text-left align-middle shadow-xl ">
            <div className="flex-col justify-between items-center w-full border h-full">
              <div className="flex justify-between items-center border-b p-4">
                <div className="text-lg font-medium leading-6 text-gray-900">
                  Connect a Wallet
                </div>
                <div className="rounded-full p-1 cursor-pointer bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div
                  onClick={() => setSelectedTab("home")}
                  className="flex w-8 h-8 p-2 bg-gray-100 rounded-full justify-start items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 opacity-90 font-normal"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </div>
                {selectedTab === "home" ? (
                  <ul>
                    {!isMobile && (
                      <li
                        onClick={() => setSelectedTab("home")}
                        className="p-0 flex justify-start items-center"
                      >
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
                      </li>
                    )}
                    <p className="text-neutral-600 text-xs mb-2 mt-4">
                      Popular
                    </p>
                    <li className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                      {connectors
                        .filter((x) => defaultConnectors.includes(x.id))
                        .map((connector) => (
                          <div
                            className="hover:border-0"
                            onClick={() =>
                              setSelectedTab(connector.name.toLowerCase())
                            }
                          >
                            <ConnectorBox connector={connector}></ConnectorBox>
                          </div>
                        ))}

                      {error && <div>{error.message}</div>}
                    </li>
                    <p className="text-neutral-600 text-xs mt-6 mb-2">
                      Other options
                    </p>
                    <li className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                      {connectors
                        .filter((x) => otherConnectors.includes(x.id))
                        .map((connector) => (
                          <div
                            onClick={() =>
                              setSelectedTab(connector.name.toLowerCase())
                            }
                          >
                            <ConnectorBox connector={connector}></ConnectorBox>
                          </div>
                        ))}

                      {error && <div>{error.message}</div>}
                    </li>
                  </ul>
                ) : // TODO @vhawk19 do this for every connector based on the names defined on the Connector.tsx file
                selectedTab === "metamask" ? (
                  <Metamask />
                ) : selectedTab === "defaultscreen" ? (
                  <DefaultScreen />
                ) : null}
              </div>
              {selectedTab !== "defaultscreen" && (
                <div className="flex justify-between items-center p-4 bg-gray-100">
                  <p className="text-sm font-normal opacity-70 ">
                    Learn more about web3
                  </p>
                  <div
                    onClick={() => setSelectedTab("defaultscreen")}
                    className="rounded-full text-xs opacity-90 bg-gray-300 p-2"
                  >
                    Get Started
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TabList = () => {
  return <></>;
};

export default SmallConnectWallet;
