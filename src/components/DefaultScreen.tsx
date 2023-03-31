import ProfileContext from "../utils/ProfileContext";
import { useContext } from "react";
import { getBackgroundColor } from "../utils/accentColor";
import { AnimatePresence, motion } from "framer-motion";

const DefaultScreen = () => {
  const profile = useContext(ProfileContext);
  console.log(profile);
  const radius = ["rounded-none", "rounded-md", "rounded-lg", "rounded-2xl"][
    profile.radius
  ];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="h-full w-full p-5 relative dark:divide-white"
      >
        <div className="absolute top-0 right-0 z-10">
          <img
            src="/assets/illustration.svg"
            className="h-60"
            alt="illustration"
          />
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
                src="/assets/wallet.svg"
                alt="globe"
              />
              <p>Your first Web3 Wallet</p>
            </div>
            <button
              className={`${getBackgroundColor(
                profile.color
              )} rounded-full text-xs px-2 py-1 ${radius}`}
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex justify-start items-center">
              <svg
                className="h-5 w-5 mr-3 stroke-white"
                href="/assets/globe.svg"
              ></svg>
              <p>Explore more about Web3</p>
            </div>
            <button
              className={`${getBackgroundColor(
                profile.color
              )} rounded-full text-xs px-2 py-1 ${radius}`}
            >
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DefaultScreen;
