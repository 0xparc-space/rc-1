import { Tab } from "@headlessui/react";
import { connect } from "http2";
import { useState } from "react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import ConnectWithQRCode from "./ConnectWithQr";
import Connected from "./Connected";

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
  const { address, isConnecting } = useAccount();
  const { data, isError, isLoading } = useEnsName({ address: address });
  console.log('wallet connect detail',isConnecting,address)
  if(address && !isLoading){
    return  <Connected /> || (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-5 h-5 opacity-30 mt-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    )
  }
  return <ConnectWithQRCode connectorId ={'walletConnect'}/>
};

export default WalletConnectDetail;