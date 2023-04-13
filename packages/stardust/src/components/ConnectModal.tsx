import { useContext } from 'react'
import ProfileContext from '../utils/ProfileContext'
import CompactView from './CompactView'
import LargeView from './LargeView'

const ConnectModal = () => {
  console.log('profile context is', useContext(ProfileContext))
  const { index } = useContext(ProfileContext)
  return <>{index === 1 ? <CompactView /> : <LargeView />}</>
}

export default ConnectModal
