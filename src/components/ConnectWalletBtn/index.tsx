const ConnectWalletBtn = ({openModal} : {openModal: () => void}) => {
  return (
    <button
      type="button"
      onClick={openModal}
      className="bg-[#167DF2] rounded-[12px] font-medium text-base px-4 py-4 text-white hover:bg-[#0D5EBF] focus:bg-[#022759] focus:outline-none"
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletBtn;
