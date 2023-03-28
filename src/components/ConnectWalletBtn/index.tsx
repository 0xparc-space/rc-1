import { useContext } from "react";
import ProfileContext from "../../utils/ProfileContext";
import {getBackgroundColor} from "../../utils/accentColor"

const ConnectWalletBtn = () => {
  const {  radius,color, setProfile } = useContext(ProfileContext);
  const openModal = () => {
    setProfile({isModalOpen:true})
  }
  const selectedRadius = ['rounded-none','rounded-md','rounded-lg','rounded-2xl'][radius]
  return (
    <button
      type="button"
      onClick={openModal}
      className={` ${ getBackgroundColor(color)} ${selectedRadius} justify-center text-center font-medium text-base px-4 py-4 text-white hover:bg-[#0D5EBF] focus:bg-[#022759] focus:outline-none `}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletBtn;
