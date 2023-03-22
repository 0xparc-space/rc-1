import { useContext } from "react";
import { ProfileContext } from "../../utils/ProfileContext";

const ConnectWalletBtn = ({ openModal }: { openModal: () => void }) => {
  const {profile, useProfile} = useContext(ProfileContext)
  const radius = ['rounded-none','rounded-md','rounded-lg','rounded-2xl'][profile.radius]
  return (
    <button
      type="button"
      onClick={openModal}
      className={`bg-[#167DF2] ${radius} font-medium text-base px-4 py-4 text-white hover:bg-[#0D5EBF] focus:bg-[#022759] focus:outline-none `}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletBtn;
