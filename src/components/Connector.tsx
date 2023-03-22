import { Connector, useAccount, useConnect } from "wagmi";

const getImageName = (text: string) => {
  const imageMap = new Map([
    ["metaMask", "src/assets/metamask.svg"],
    ["walletConnect", "src/assets/walletConnect.svg"],
    ["coinbaseWallet", "src/assets/coinbase.svg"],
    ["ledger", "src/assets/ledger.svg"],
    ["safe", "src/assets/safe.svg"],
  ]);
  const res = imageMap.get(text);
  if (res != undefined) {
    return res;
  }
  return "default";
};

const ConnectorBox = ({ connector }: { connector: Connector }) => {
  const { connect } = useConnect();
  const { address } = useAccount();

  const img = getImageName(connector.id);

  return (
    <>
      <button
        disabled={!connector.ready}
        key={connector.id}
        onClick={() => {
          if (!address) {
            connect({ connector });
          }
        }}
        className="text-sm hover:bg-[#EDF0F4] flex items-center rounded-lg justify-start w-44 bg-white p-1 border-0 bg-transparent"
      >
        <div className="h-7 w-7 rounded-xl mr-1 bg-neutral-200">
          <img src={img} width={28} />
        </div>
        <p className="ml-1">{connector.name}</p>
        {!connector.ready && " (unsupported)"}
        {/* {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"} */}
      </button>
    </>
  );
};
export const ConnectorPlaceHolder = ({
  text,
  image,
}: {
  text: string;
  image: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-start my-2">
        <div className="h-7 w-7 rounded-xl bg-neutral-200">
          <img src={image} />
        </div>
        <p className="text-sm ml-3">{text}</p>
      </div>
    </>
  );
};

export default ConnectorBox;
