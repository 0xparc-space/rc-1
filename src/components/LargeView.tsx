import { useAccount, useConnect } from "wagmi";
import { defaultConnectors, otherConnectors } from "./Connectors";
import ConnectorBox from "./Connector";
import { useContext } from "react";
import ProfileContext from "../utils/ProfileContext";
import ViewComponent from "./ViewComponent";
import clsx from "clsx";
import Connected from "./Connected";
import ConnectWalletBtn from "./ConnectWalletBtn";
import { motion } from "framer-motion";
import CloseBtn from "./buttons/CloseBtn";
import Modal from "@headlessui/react";

const LargeView = () => {
  const { connectors, error } = useConnect();
  const { connector, isConnected } = useAccount();

  const { dark, radius, tab, isModalOpen, setProfile } =
    useContext(ProfileContext);

  const pradius = ["none", "md", "lg", "2xl"][radius];

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  function handleClick() {}

  return (
    <>
      <div
        className={clsx(
          "w-[50%] m-3 rounded-2xl bg-cover bg-no-repeat h-full ",
          dark ? "dark" : ""
        )}
        style={{ backgroundImage: `url(assets/banner.png)` }}
      >
        {!isModalOpen && (
          <div className="flex min-h-full items-center justify-center text-center">
            <ConnectWalletBtn />
          </div>
        )}
        {isModalOpen && (
          <div
            className={`h-full inset-0 overflow-y-auto ${dark ? "dark" : ""}`}
          >
            {" "}
            {isConnected && <Connected />}
            <div className="flex min-h-full items-center justify-center text-center">
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.4 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className={`flex relative w-[650px] h-[450px] overflow-hidden bg-white text-gray-900 dark:text-white dark:bg-dark-neutral-0 text-left align-middle shadow-xl rounded-${pradius} `}
                >
                  <div className="flex-col border-r border-black dark:border-white border-opacity-10 dark:border-opacity-10 h-full ">
                    <div className="text-lg font-medium leading-6 outline-r outline-black dark:outline-white outline-opacity-30 p-4 mb-1 border-b border-opacity-10 dark:border-opacity-10 border-black dark:border-white">
                      Connect a Wallet
                    </div>
                    <div className="p-4">
                      <motion.ul variants={list}>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="p-0 cursor-pointer flex justify-start items-center border-0 rounded-full"
                        >
                          {tab !== 0 && (
                            <div className="flex w-8 h-8 rounded-full bg-white bg-opacity-20 justify-start items-center">
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
                          )}
                        </motion.li>
                        <p className="text-black dark:text-white opacity-60 text-xs mb-2 mt-4">
                          Popular
                        </p>
                        <div className="space-y-3 flex flex-col justify-start items-start w-[200px]">
                          {connectors
                            .filter((x) => defaultConnectors.includes(x.id))
                            .map((defaultConnector, idx) => (
                              <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-0"
                              >
                                <button
                                  disabled={
                                    defaultConnector !== connector &&
                                    isConnected
                                  }
                                  key={idx}
                                  onClick={() => setProfile({ tab: idx })}
                                  className="p-0 cursor-pointer bg-transparent border-0 active:border-0 disabled:opacity-50"
                                >
                                  <ConnectorBox
                                    connector={defaultConnector}
                                  ></ConnectorBox>
                                </button>
                              </motion.li>
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
                              <motion.li
                                animate={{ x: 0, opacity: 1 }}
                                initial={{ x: -500, opacity: 0 }}
                                transition={{ type: "tween", duration: 0.1 }}
                                className="p-0"
                              >
                                <button
                                  disabled={
                                    otherConnector !== connector && isConnected
                                  }
                                  key={idx}
                                  onClick={() => setProfile({ tab: idx })}
                                  className="p-0 cursor-pointer bg-transparent border-0 active:border-0 disabled:opacity-50"
                                >
                                  <ConnectorBox
                                    connector={otherConnector}
                                  ></ConnectorBox>
                                </button>
                              </motion.li>
                            ))}

                          {error && <div>{error.message}</div>}
                        </div>
                      </motion.ul>
                    </div>
                  </div>
                  <ViewComponent />
                  <CloseBtn
                    onClick={() => false}
                    classes="absolute z-50 top-2 right-2"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LargeView;
