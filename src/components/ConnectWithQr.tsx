import React, { useState, useEffect, useContext } from "react";

import CustomQRCode from "./CustomQRCode";
import { useConnect } from "wagmi";

const ConnectWithQRCode = ({ connectorId }) => {
  console.log("1", connectorId);
  //   const context = useContext();

  const [id, setId] = useState(connectorId);

  const { connectors, connectAsync } = useConnect();
  const [connectorUri, setConnectorUri] = useState<string | undefined>(
    undefined
  );

  let connector;
  switch (connectorId) {
    case "coinbaseWallet":
      connector = connectors[1];
      break;
    case "walletConnect":
      connector = connectors[2];
      break;
  }

  console.log("2");
  async function connectWallet(connector: any) {
    const result = await connectAsync({ connector: connector });

    if (result) {
      return result;
    }

    return false;
  }

  async function connectWalletConnect(connector: any) {
    console.log("reaches here");
    console.log("5->", connector.options);
    // if (connector.options?.version === '1') {
    // connector.on("message", async (e) => {
    //   console.log(6);
    //   //@ts-ignore
    //   const p = await connector.getProvider();
    //   setConnectorUri(p.connector.uri);

    //   // User rejected, regenerate QR code
    //   p.connector.on("disconnect", () => {
    //     connectWallet(connector);
    //   });
    // });
    // try {
    //   await connectWallet(connector);
    // } catch (err) {
    //   // context.debug(
    //   //   <>WalletConnect cannot connect. See console for more details.</>,
    //   //   err
    //   // );
    // }
    // } else {
    console.log("6", await connector.getProvider());
    connector.on("message", async (e) => {
      console.log(7);
      const p = await connector.getProvider();
      setConnectorUri(p.uri);
      console.log("8", p);
      console.log("connectorURI is", p.uri);
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
    // }
  }

  const startConnect = async () => {
    // const c = connectors.filter((c) => c.id === id)[0];
    // if (!c || connectorUri) return;

    console.log("yo");

    switch (connectorId) {
      case "coinbaseWallet":
        connector.on("message", async (e) => {
          const p = await connector.getProvider();
          setConnectorUri(p.qrUrl);
        });
        try {
          await connectWallet(c);
        } catch (err) {
          //   context.debug(
          //     <>
          //       This dApp is most likely missing the{' '}
          //       <code>headlessMode: true</code> flag in the custom{' '}
          //       <code>CoinbaseWalletConnector</code> options. See{' '}
          //       <a
          //         target="_blank"
          //         rel="noopener noreferrer"
          //         href="https://connect.family.co/v0/docs/cbwHeadlessMode"
          //       >
          //         documentation
          //       </a>{' '}
          //       for more details.
          //     </>,
          //     err
          //   );
        }
        break;
      case "walletConnect":
        console.log("hey1");
        connectWalletConnect(connector);
        break;
    }
  };

  console.log(3);
  useEffect(() => {
    console.log("yooo");
    if (!connectorUri) startConnect();
  }, []);

  console.log(4);

  let imageURI;
  switch (connectorId) {
    case "coinbaseWallet":
      imageURI = "/src/assets/coinbase.svg";
      break;
    case "walletConnect":
      imageURI = "/src/assets/walletConnect.svg";
      break;
  }
  console.log("connector", connectorUri);
  return <CustomQRCode value={connectorUri} image={imageURI} />;
};

export default ConnectWithQRCode;
