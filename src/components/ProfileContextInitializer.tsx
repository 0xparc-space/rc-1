import { useState } from "react";
import ProfileContext, { Profile } from "../utils/ProfileContext";

const ProfileContextInitializer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    radius: 3,
    color: 0,
    dark: true,
    index: 0,
    tab: 0,
    isModalOpen: false,
    setProfile: (profile) => {
      setProfile((prevProfile) => ({ ...prevProfile, ...profile }));
    },
    toggleModalOpen: (value: boolean) => setisModalOpen(!value),
  });

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextInitializer;
