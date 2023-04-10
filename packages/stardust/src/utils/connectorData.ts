export type ConnectorModel = {
  id: number;
  stringId: string;
  name: string;
  img: string;
  hasQR: boolean;
  isSupported: boolean;
};

const ConnectorModels: ConnectorModel[] = [
  {
    id: 0,
    stringId: "metaMask",
    name: "metamask",
    img: "/assets/metamask.svg",
    hasQR: false,
    isSupported: true,
  },
  {
    id: 1,
    stringId: "coinbaseWallet",
    name: "coinbase",
    img: "/assets/coinbase.svg",
    hasQR: true,
    isSupported: true,
  },
  {
    id: 2,
    stringId: "walletConnect",
    name: "walletconnect",
    img: "/assets/walletConnect.svg",
    hasQR: true,
    isSupported: true,
  },
  {
    id: 3,
    stringId: "ledger",
    name: "ledger",
    img: "/assets/ledger.svg",
    hasQR: false,
    isSupported: true,
  },
  {
    id: 4,
    stringId: "safe",
    name: "safe",
    img: "/assets/safe.svg",
    hasQR: true,
    isSupported: false,
  },
];

export const nameToID = (name: string) => {};

export default ConnectorModels;
