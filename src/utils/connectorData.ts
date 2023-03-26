export type ConnectorModel = {
  id: number;
  name: string;
  img: string;
  hasQR: boolean;
  isSupported: boolean;
};

const ConnectorModels: ConnectorModel[] = [
  {
    id: 0,
    name: "metamask",
    img: "/assets/metamask.svg",
    hasQR: false,
    isSupported: true,
  },
  {
    id: 1,
    name: "coinbase",
    img: "/assets/coinbase.svg",
    hasQR: true,
    isSupported: true,
  },
  {
    id: 2,
    name: "walletconnect",
    img: "/assets/walletConnect.svg",
    hasQR: true,
    isSupported: true,
  },
  {
    id: 3,
    name: "hardware",
    img: "/assets/ledger.svg",
    hasQR: false,
    isSupported: true,
  },
  {
    id: 4,
    name: "safe",
    img: "/assets/safe.svg",
    hasQR: true,
    isSupported: false,
  },
];

export const nameToID = (name: string) => {};

export default ConnectorModels;
