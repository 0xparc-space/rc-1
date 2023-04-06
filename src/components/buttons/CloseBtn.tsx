import clsx from "clsx";
import { useContext } from "react";
import ProfileContext from "../../utils/ProfileContext";

const CloseBtn = ({
  classes,
  onClick,
}: {
  classes: string;
  onClick: () => boolean;
}) => {
  const { toggleModalOpen, isModalOpen } = useContext(ProfileContext);
  return (
    <div
      onClick={(e) => {
        toggleModalOpen(isModalOpen);
      }}
      className={clsx(
        "bg-[#EDF0F4] bg-opacity-20 cursor-pointer hover:bg-opacity-60 p-1 rounded-full text-center text-black dark:text-white",
        classes
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-center"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default CloseBtn;
