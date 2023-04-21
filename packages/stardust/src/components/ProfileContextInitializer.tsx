import { useState } from 'react'
import ProfileContext, { Profile } from '../utils/ProfileContext'
import Layout from './Layout'
import '../index.css'

const ProfileContextInitializer = ({
  children,
  ...rest
}: {
  children: React.ReactNode
}) => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [profile, setProfile] = useState<Profile>()

  const defaultProfile = {
    radius: 3,
    color: 0,
    dark: true,
    index: 0,
    tab: 0,
    isModalOpen: true,
    setProfile: setProfile,
    toggleModalOpen: setisModalOpen,
  }

  return (
    <ProfileContext.Provider value={defaultProfile}>
      <Layout {...rest}>
        {/* <ComponentBuilderSection /> */}
        {/* <Component {...pageProps} /> */}
        {children}

        {/* <ConnectModal /> */}
      </Layout>
    </ProfileContext.Provider>
  )
}

export default ProfileContextInitializer
