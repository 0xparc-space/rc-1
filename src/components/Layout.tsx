import clsx from "clsx";
import React, { useContext } from "react";
import ProfileContext from "../utils/ProfileContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { dark } = useContext(ProfileContext);
  return (
    <div
      className={clsx(
        `flex w-screen h-screen `,
        dark ? "bg-black bg-opacity-90" : "bg-white"
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
