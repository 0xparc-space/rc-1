import { useEffect, useState } from 'react'
import ProfileContext, { Profile } from '../utils/ProfileContext'
import Layout from './Layout'
import ConnectModal from './ConnectModal'
import { WagmiConfig } from 'wagmi'
import client from '../utils/wagmi'

const ProfileContextInitializer = ({
  children,
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
    isModalOpen: false,
    setProfile: (profile) => {
      setProfile((prevProfile) => ({ ...prevProfile, ...profile }))
    },
    toggleModalOpen: (value: boolean) => setisModalOpen(!value),
  }

  useEffect(() => {
    setProfile(defaultProfile)
  }, [])

  return (
    <WagmiConfig client={client}>
      <ProfileContext.Provider value={profile}>
        <Layout>
          {/* <ComponentBuilderSection /> */}
          {/* <Component {...pageProps} /> */}
          {children}

          {/* <ConnectModal /> */}
        </Layout>
      </ProfileContext.Provider>
    </WagmiConfig>
  )
}

export default ProfileContextInitializer
