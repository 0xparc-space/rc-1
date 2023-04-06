import { useContext } from "react";
import ProfileContext from "../../utils/ProfileContext";
import { getBackgroundColor } from "../../utils/accentColor";
import { motion } from "framer-motion";

const ConnectWalletBtn = () => {
  const { radius, color, setProfile } = useContext(ProfileContext);
  const openModal = () => {
    setProfile({ isModalOpen: true });
  };
  const selectedRadius = [
    "rounded-none",
    "rounded-md",
    "rounded-lg",
    "rounded-2xl",
  ][radius];
  return (
    <motion.button
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", bounce: 0.6 }}
      type="button"
      onClick={openModal}
      className={`${selectedRadius} justify-center text-center font-medium bg-[#0D5EBF] text-base px-4 py-4 text-white hover:bg-[#0D5EBF] focus:bg-[#022759] focus:outline-none`}
    >
      Connect Wallet
    </motion.button>
  );
};

export default ConnectWalletBtn;
