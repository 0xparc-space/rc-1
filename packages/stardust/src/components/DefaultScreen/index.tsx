import ProfileContext from "../../utils/ProfileContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InfoBtn from "./InfoBtn";

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
          <motion.img
            initial={{ x: -200, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            src="/assets/illustration.svg"
            className="h-60"
            alt="illustration"
          />
        </div>
        <div className="flex-col justify-start items-center divide-y divide-y-black dark:divide-white dark:divide-opacity-10 divide-opacity-10">
          <div className="z-40 mt-24">
            <h2 className="font-bold text-[30px] leading-9">
              Your
              <br />
              Gateway
              <br />
              to web3
            </h2>
            <p className="text-xs w-[200px] mt-2 text-black dark:text-white opacity-60">
              Your wallet is the gateway to all things Ethereum, the magical
              technology that makes it possible to explore web3.
            </p>
          </div>
          {!profile.dark && (
            <div className="flex justify-between mt-6 py-4">
              <div className="flex justify-start items-center">
                <img
                  className="h-5 w-5 mr-3"
                  src="/assets/wallet.svg"
                  alt="globe"
                />
                <p>Your first Web3 Wallet</p>
              </div>
              <InfoBtn text="Get Started" />
            </div>
          )}
          <div
            className={`flex justify-between py-4 ${profile.dark && "mt-6"}`}
          >
            <div className="flex justify-start items-center">
              <img
                className="h-5 w-5 mr-3"
                src={
                  profile.dark ? "/assets/globe-white.svg" : "/assets/globe.svg"
                }
              />
              <p>Explore more about Web3</p>
            </div>
            <InfoBtn text="Learn More" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DefaultScreen;
