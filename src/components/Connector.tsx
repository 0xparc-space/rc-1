import { Connector, useAccount, useConnect } from "wagmi";
import { ProfileContext } from "../utils/ProfileContext";
import { useContext } from "react";

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
  const { profile, setProfile } = useContext(ProfileContext);

  const img = getImageName(connector.id);

  console.log("heree");
  if (profile.mode == 0) {
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
          className="text-sm flex items-center justify-start bg-white p-1 border-0 hover:bg-[##EDF0F4]"
        >
          <div className="h-7 w-7 rounded-xl mr-1 bg-neutral-200">
            <img src={img} width={28} />
          </div>
          {connector.name}
          {!connector.ready && " (unsupported)"}
          {/* {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"} */}
        </button>
      </>
    );
  }
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
        className="text-sm flex items-center justify-start bg-black p-1 border-0 hover:bg-[##EDF0F4]"
      >
        <div className="h-7 w-7 rounded-xl mr-1 bg-dark-neutral-200">
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

export default ConnectorBox;
