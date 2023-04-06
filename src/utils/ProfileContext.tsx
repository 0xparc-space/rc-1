import { createContext, Dispatch } from "react";

export type Profile = {
  radius: number;
  color: number;
  dark: boolean;
  index: number;
  tab: number;
  isModalOpen: boolean;

  setProfile: Dispatch<React.SetStateAction<Partial<Profile>>>;
  toggleModalOpen: (open: boolean) => void;
};

const ProfileContext = createContext<Profile>({
  radius: 0,
  color: 0,
  dark: true,
  index: 0,
  tab: 0,
  isModalOpen: false,
  setProfile: () => {},
  toggleModalOpen: (open: boolean) => {},
});

export default ProfileContext;
