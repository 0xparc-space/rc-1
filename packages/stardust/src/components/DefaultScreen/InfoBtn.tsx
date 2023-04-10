import { useContext } from "react";
import { getBackgroundColor } from "../../utils/accentColor";
import ProfileContext from "../../utils/ProfileContext";

const InfoBtn = ({ text }: { text: string }) => {
  const profile = useContext(ProfileContext);

  const radius = ["rounded-none", "rounded-md", "rounded-lg", "rounded-2xl"][
    profile.radius
  ];

  return (
    <>
      {" "}
      <button
        className={`${getBackgroundColor(
          profile.color
        )} rounded-full dark:text-black text-white text-xs px-2 py-1 ${radius}`}
      >
        {text}
      </button>
    </>
  );
};

export default InfoBtn;
