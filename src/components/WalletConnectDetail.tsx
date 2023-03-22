import { Tab } from "@headlessui/react";
import { connect } from "http2";
import { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import ConnectWithQRCode from "./ConnectWithQr";

const WalletConnectDetail = () => {
  // const [connectorUri, setConnectorUri] = useState<string | undefined>(
  //   undefined
  // );

  // const { address, isConnecting } = useAccount();
  // const { connectors, error,connectAsync } = useConnect();
    
  
    // try {
    //   await connectWallet(connector);
    // } catch (err) {
    //   context.debug(
    //     <>WalletConnect cannot connect. See console for more details.</>,
    //     err
    //   );
    // }
    // });
  // });
  return <ConnectWithQRCode connectorId ={'walletConnect'}/>
};

export default WalletConnectDetail;
