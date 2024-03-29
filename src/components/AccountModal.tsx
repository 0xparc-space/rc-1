import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import {
  Chain,
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useNetwork,
} from "wagmi";
import ProfileContext from "../utils/ProfileContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Alchemy, Network, TokenMetadataResponse } from "alchemy-sdk";
import { BigNumber, ethers } from "ethers";
import { motion } from "framer-motion";
import LogoutBtn from "./buttons/LogOut";

const mapProviderToAlchemyNetwork = (chain: Chain | undefined) => {
  if (chain === undefined) {
    return Network.ETH_MAINNET;
  }
  switch (chain.network) {
    case "mainnet":
      return Network.ETH_MAINNET;
    case "polygon":
      return Network.MATIC_MAINNET;
    case "arbitrum":
      return Network.ARB_MAINNET;
    case "optimism":
      return Network.OPT_MAINNET;
  }
};

type TokenBalance = {
  tokenContract: string;
  tokenBalance: string;
  tokenMetadata: TokenMetadataResponse;
};

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
  const { chain, chains } = useNetwork();

  const { data: ensAvatar, isError: ensAvatarError } = useEnsAvatar({
    address: address,
  });
  const { data: ensName, isError: ensNameError } = useEnsName({
    address: address,
  });
  const { data: balance } = useBalance({ address: address });

  const [tokenResponse, setTokenReponse] = useState([{} as TokenBalance]);
  useEffect(() => {
    const alchemyClient = new Alchemy({
      apiKey: process.env["ALCHEMY_API_KEY"],
      network: mapProviderToAlchemyNetwork(chain),
    });
    const fetchTokenBalances = async () => {
      const tokenResponse = await alchemyClient.core.getTokenBalances(
        address ? address.toString() : ""
      );
      const tokenBalances = (await Promise.all(
        tokenResponse.tokenBalances.map(async (x) => ({
          tokenContract: x.contractAddress,
          tokenBalance: BigNumber.from(x.tokenBalance).toString(),
          tokenMetadata: await alchemyClient.core.getTokenMetadata(
            x.contractAddress
          ),
        }))
      )) as TokenBalance[];
      setTokenReponse(tokenBalances);
    };

    fetchTokenBalances().catch(console.error);
  }, [address]);
  console.log(tokenResponse);
  const dark = profile.dark;

  return address ? (
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
                    {ensAvatar ? (
                      <img
                        src={ensAvatar}
                        className="h-16 w-16 rounded-full bg-gray-300"
                      ></img>
                    ) : (
                      <img
                        src={"/assets/gra.png"}
                        className="h-16 w-16 rounded-full bg-gray-300"
                      ></img>
                    )}
                    <div className="flex justify-end items-center space-x-2">
                      <LogoutBtn show={show} setShow={setShow} />
                      <div
                        onClick={() => setShow(false)}
                        className="rounded-full p-1 cursor-pointer text-black dark:text-white bg-light-neutral-100 dark:bg-dark-neutral-200"
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
                        {ensName && !ensNameError
                          ? ensName
                          : shortenAddress(address)}
                      </p>
                      <p className="text-xs dark:text-white opacity-40 mt-1">
                        {shortenAddress(address)}
                      </p>
                    </div>

                    <div className="flex flex-col p-3 w-full justify-start items-start">
                      <p className="text-xs dark:text-white opacity-40">
                        Wallet balance
                      </p>
                      <p className="text-md dark:text-opacity font-medium mt-1 leading-6 text-gray-900 dark:text-white dark:opacity-80">
                        {`${Number(balance?.formatted).toPrecision(3)} ${
                          balance?.symbol
                        }`}{" "}
                      </p>
                    </div>

                    <ul className="p-3 w-full">
                      <p className="text-sm dark:text-white opacity-60">
                        Assets
                      </p>
                      {tokenResponse.length > 0 &&
                        tokenResponse.map((token) => {
                          if (token?.tokenMetadata?.name) {
                            console.log("why come here? ");
                            return (
                              <li className="flex my-2 justify-between items-center">
                                <div className="flex w-full  justify-start mt-2 items-center">
                                  <img
                                    src={token.tokenMetadata?.logo}
                                    className="h-7 w-7 rounded-full bg-gray-300"
                                  ></img>
                                  <div className="flex ml-2 flex-col  justify-start items-start">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white dark:opacity-80">
                                      {token.tokenMetadata.name}
                                    </p>
                                  </div>
                                </div>
                                <p className="text-xs font-normal text-gray-900 dark:text-white dark:opacity-80">
                                  {token.tokenBalance}
                                </p>
                              </li>
                            );
                          } else {
                            return null;
                          }
                        })}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  ) : (
    <></>
  );
};

export default AccountModal;
