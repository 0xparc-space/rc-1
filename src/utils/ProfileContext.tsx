import { createContext, Dispatch } from "react";

export type Profile = {
  radius: number;
  color: number;
  dark: boolean;
  index: number;
  tab: number;

  setProfile: Dispatch<React.SetStateAction<Partial<Profile>>>;
};

const ProfileContext = createContext<Profile>({
  radius: 0,
  color: 0,
  dark: true,
  index: 0,
  tab: 0,
  setProfile: () => {},
});

export default ProfileContext;
