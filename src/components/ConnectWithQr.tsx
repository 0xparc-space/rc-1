import React, { useState, useEffect, useContext } from "react";

import CustomQRCode from "./CustomQRCode";
import { useConnect, } from "wagmi";
import ProfileContext from "../utils/ProfileContext";

const setURIForWallet = async({ connector  }) => {
  if(connector==undefined){
    return 
  }
  const connectorId = connector.id

  const [id, setId] = useState(connectorId);

  const { connectors, connectAsync } = useConnect();
  const { setProfile} = useContext(ProfileContext)
  const [connectorUri, setConnectorUri] = useState<string | undefined>(
    undefined
  );




  async function connectWallet(connector: any) {
    const result = await connectAsync({ connector: connector });

    if (result) {
      return result;
    }

    return false;
  }

  async function connectWalletConnect(connector: any) {
    connector.on("message", async (e) => {
      const p = await connector.getProvider();
      setConnectorUri(p.uri);
      setProfile({uri: p.uri })
      // User rejected, regenerate QR code
      connector.on("disconnect", () => {
        console.log("disconnect");
      });
      connector.on("error", () => {
        console.log("disconnect");
      });
    });

    try {
      const res = await connectWallet(connector);
      console.log("connected res", res);
    } catch (error: any) {
      if (error.code) {
        switch (error.code) {
          case 4001:
            console.error("User rejected");
            connectWalletConnect(connector); // Regenerate QR code
            break;
          default:
            console.error("Unknown error");
            break;
        }
      } else {
        // Sometimes the error doesn't respond with a code
        //   context.debug(
        //     <>WalletConnect cannot connect. See console for more details.</>,
        //     error
        //   );
      }
    }
    }

    while(!connectorUri){
      await connectWalletConnect(connector)
    }
   
  
  }



export default setURIForWallet;
