import { Tab } from "@headlessui/react";
import { useConnect } from "wagmi";
import { defaultConnectors, otherConnectors } from "./Connectors";
import ConnectorBox from "./Connector";
import DefaultScreen from "./DefaultScreen";
import Metamask from "./Metamask";

const WalletConnect = () => {
  const { connectors, error } = useConnect();

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center text-center">
        <Tab.Group>
          <div className="flex w-[650px] h-[450px] overflow-hidden rounded-2xl bg-gray-50 text-left align-middle shadow-xl ">
            <div className="flex-col border h-full border-r">
              <div className="text-lg font-medium leading-6 border-r text-gray-900 p-4 mb-1 border-b">
                Connect a Wallet
              </div>
              <div className="p-4">
                <Tab.List>
                  <Tab className="p-0 flex justify-start items-center">
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
                  </Tab>
                  <p className="text-neutral-600 text-xs mb-2 mt-4">Popular</p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => defaultConnectors.includes(x.id))
                      .map((connector) => (
                        <ConnectorBox connector={connector}></ConnectorBox>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                  <p className="text-neutral-600 text-xs mt-6 mb-2">
                    Other options
                  </p>
                  <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                    {connectors
                      .filter((x) => otherConnectors.includes(x.id))
                      .map((connector) => (
                        <ConnectorBox connector={connector}></ConnectorBox>
                      ))}

                    {error && <div>{error.message}</div>}
                  </div>
                </Tab.List>
              </div>
            </div>
            <Tab.Panels className="w-full h-full flex flex-col justify-center m-4">
              <DefaultScreen />
              <Metamask />
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

export default WalletConnect;
