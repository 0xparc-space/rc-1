import { ProfileContext } from "../utils/ProfileContext";
import { useContext } from "react";

const DefaultScreen = () => {
  const { profile } = useContext(ProfileContext);
  const radius = ["rounded-none", "rounded-md", "rounded-lg", "rounded-2xl"][
    profile.radius
  ];
  return (
    <div className="h-full p-5 relative dark:divide-white">
      <div className="absolute top-0 right-0 z-10">
        <img src="/src/assets/illustration.svg" alt="illustration" />
      </div>
      <div className="flex-col justify-start items-center divide-y divide-y-black dark:divide-white dark:divide-opacity-10 divide-opacity-10">
        <div className="z-40 mt-24">
          <h2 className="font-semibold text-[30px] leading-8">
            Your Journey
            <br />
            into web3
            <br />
            starts here
          </h2>
          <p className="text-xs w-[200px] mt-2 text-black dark:text-white opacity-60">
            Your wallet is the gateway to all things Ethereum, the magical
            technology that makes it possible to explore web3.
          </p>
        </div>
        <div className="flex justify-between mt-6 py-4">
          <div className="flex justify-start items-center">
            <img
              className="h-5 w-5 mr-3"
              src="/src/assets/wallet.svg"
              alt="globe"
            />

            <p>Your first Web3 Wallet</p>
          </div>
          <button
            className={`bg-[#EDF0F4] dark:bg-dark-neutral-200 rounded-full text-xs px-2 py-1 ${radius}`}
          >
            Get Started
          </button>
        </div>
        <div className="flex justify-between py-4">
          <div className="flex justify-start items-center">
            <img
              className="h-5 w-5 mr-3"
              src="/src/assets/globe.svg"
              alt="globe"
            />
            <p>Explore more about Web3</p>
          </div>
          <button
            className={`bg-[#EDF0F4] dark:bg-dark-neutral-200 rounded-full text-xs px-2 py-1 ${radius}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultScreen;
