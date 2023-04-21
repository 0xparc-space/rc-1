import { Connector, useAccount, useConnect } from 'wagmi'
import ProfileContext from '../utils/ProfileContext'
import { useContext } from 'react'
import icons from '../utils/iconsReact'
import metamask from '../../public/images/metamask.svg'
import walletConnect from '../../public/images/walletConnect.svg'
import coinbaseWallet from '../../public/images/coinbaseWallet.svg'
import ledger from '../../public/images/ledger.svg'
import safe from '../../public/images/safe.svg'

const getImageName = (text: string) => {
  const imageMap = new Map([
    ['metaMask', icons.Metamask({})],
    ['walletConnect', icons.WalletConnect({})],
    ['coinbaseWallet', icons.Coinbase({})],
    ['ledger', icons.Ledger({})],
    ['safe', icons.Safe({})],
  ])

  const res = imageMap.get(text)
  console.log(text, res)
  if (res != undefined) {
    return res
  }
  return <></>
}

const ConnectorBox = ({ connector }: { connector: Connector }) => {
  const { connect } = useConnect()
  const { address } = useAccount()
  const profile = useContext(ProfileContext)
  console.log(connector.id)
  const ConnectorIcon = getImageName(connector.id)

  if (profile.index === 1) {
    return (
      <>
        <div
          key={connector.id}
          onClick={() => {
            if (!address) {
              connect({ connector })
            }
          }}
          className="text-sm w-full md:w-44 flex items-center rounded-lg justify-start p-1 bg-transparent hover:bg-[#EDF0F4] dark:hover:bg-dark-neutral-200 border-0"
        >
          <div className="h-7 w-7 rounded-xl mr-1 bg-neutral-200">
            {ConnectorIcon}
          </div>
          <p className="ml-1">{connector.name}</p>
          {!connector.ready && ' (unsupported)'}
          {/* {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"} */}
        </div>
      </>
    )
  }
  return (
    <>
      <div
        key={connector.id}
        onClick={() => {
          if (!address) {
            connect({ connector })
          }
        }}
        className="text-sm flex items-center rounded-lg justify-start p-1 w-full md:w-44 bg-transparent hover:bg-[#EDF0F4] dark:hover:bg-dark-neutral-200 border-0"
      >
        <div className="h-7 w-7 rounded-xl mr-1 bg-dark-neutral-200">
          {ConnectorIcon}
        </div>
        <p className="ml-1">{connector.name}</p>
        {!connector.ready && ' (unsupported)'}
        {/* {isLoading &&
                    connector.id === pendingConnector?.id &&
                    " (connecting)"} */}
      </div>
    </>
  )
}

export default ConnectorBox
