import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { useAccount, useDisconnect, useEnsAvatar } from "wagmi";
import ProfileContext from "../utils/ProfileContext";

const AccountModal = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const profile = useContext(ProfileContext);

  const { data, isError } = useEnsAvatar({ address: address });

  const dark = profile.dark;

  return (
    <>
      <Transition show={show} as={Fragment}>
        <Dialog
          as="div"
          className={`relative z-10 ${dark ? "dark" : ""}`}
          onClose={() => setShow(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black backdrop-blur-2xl bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-80 max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-dark-neutral-0 shadow-2xl transition-all">
                  <div className="flex w-full space-x-2 p-4 justify-between items-start">
                    {data ? (
                      <img
                        src={data}
                        className="h-16 w-16 rounded-full bg-gray-300"
                      ></img>
                    ) : (
                      <img
                        src={"/assets/gra.png"}
                        className="h-16 w-16 rounded-full bg-gray-300"
                      ></img>
                    )}
                    <div className="flex justify-end items-center space-x-2">
                      <div
                        onClick={() => {
                          disconnect();
                          setTimeout(() => {
                            setShow(false);
                          }, 300);
                        }}
                        className="rounded-full p-1 cursor-pointer bg-white opacity-30 hover:bg-gray-500"
                      >
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
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                          />
                        </svg>
                      </div>

                      <div
                        onClick={() => setShow(false)}
                        className="rounded-full p-1 cursor-pointer bg-white opacity-30 hover:bg-gray-500"
                      >
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
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start p-2 divide-y divide-black dark:divide-white dark:divide-opacity-5 divide-opacity-10 text-left">
                    <div className="flex flex-col p-3 w-full justify-start items-start">
                      <p className="text-lg font-medium leading-6 text-gray-900 dark:text-white dark:opacity-80">
                        shubii.eth
                      </p>
                      <p className="text-xs dark:text-white opacity-40 mt-1">
                        0x91921..12112
                      </p>
                    </div>

                    <div className="flex flex-col p-3 w-full justify-start items-start">
                      <p className="text-xs dark:text-white opacity-40">
                        Wallet balance
                      </p>
                      <p className="text-md dark:text-opacity font-medium mt-1 leading-6 text-gray-900 dark:text-white dark:opacity-80">
                        0.0511 ETH
                      </p>
                    </div>

                    <ul className="p-3 w-full">
                      <p className="text-sm dark:text-white opacity-60">
                        Assets
                      </p>
                      <li className="flex my-2 justify-between items-center">
                        <div className="flex w-full  justify-start mt-2 items-center">
                          <img
                            src="/assets/Ethereum.svg"
                            className="h-7 w-7 rounded-full bg-gray-300"
                          ></img>
                          <div className="flex ml-2 flex-col  justify-start items-start">
                            <p className="text-sm font-medium text-gray-900 dark:text-white dark:opacity-80">
                              Ethereum
                            </p>
                            <p className="text-xs font-normal text-gray-900 dark:text-white dark:opacity-80">
                              0.0511 ETH
                            </p>
                          </div>
                        </div>
                        <p className="text-sm dark:text-white">$1,120,12</p>
                      </li>

                      <li className="flex mt-4 justify-between items-center">
                        <div className="flex w-full justify-start items-center">
                          <img
                            src="/assets/matic.svg"
                            className="h-7 w-7 rounded-full bg-gray-300"
                          ></img>
                          <div className="flex ml-2 flex-col justify-start items-start">
                            <p className="text-sm font-medium text-gray-900 dark:text-white dark:opacity-80">
                              Matic
                            </p>
                            <p className="text-xs font-normal text-gray-900 dark:text-white dark:opacity-80">
                              252001 MATIC
                            </p>
                          </div>
                        </div>
                        <p className="text-sm dark:text-white">$2,520,12</p>
                      </li>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AccountModal;
