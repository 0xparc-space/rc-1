export type ConnectorModel = {
  id: number
  wagmiID: string
  name: string
  img: string
  hasQR: boolean
  isSupported: boolean
}

const ConnectorModels: ConnectorModel[] = [
  {
    id: 0,
    name: 'metaask',
    wagmiID: 'metaMask',
    img: '/assets/metamask.svg',
    hasQR: false,
    isSupported: true,
  },
  {
    id: 1,
    name: 'coinbase',
    wagmiID: 'coinbaseWallet',
    img: '/assets/coinbase.svg',
    hasQR: true,
    isSupported: true,
  },
  {
    id: 2,
    name: 'walletconnect',
    wagmiID: 'walletConnect',
    img: '/assets/walletConnect.svg',
    hasQR: true,
    isSupported: true,
  },
  {
    id: 3,
    name: 'hardware',
    wagmiID: 'ledger',
    img: '/assets/ledger.svg',
    hasQR: false,
    isSupported: true,
  },
  {
    id: 4,
    name: 'safe',
    wagmiID: 'safe',
    img: '/assets/safe.svg',
    hasQR: true,
    isSupported: false,
  },
]

export const nameToID = (name: string) => {}

export default ConnectorModels
