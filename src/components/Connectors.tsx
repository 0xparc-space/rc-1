import { Connector, useConnect } from 'wagmi'
import ConnectorBox from './Connector'

const defaultConnectors = ['metaMask','coinbaseWallet','walletConnect']
const otherConnectors = ['ledger','safe']
 export function Connectors() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  return (
    <div>
      {connectors.map((connector) => (
            <ConnectorBox connector={connector}></ConnectorBox>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}
export function DefaultConnectors() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  return (
    <div className='space-y-4'>
      {connectors.filter((x)=>defaultConnectors.includes(x.id)).map((connector) => (
            <ConnectorBox connector={connector}></ConnectorBox>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}
export function OtherConnectors() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  return (
    <div className='space-y-4'>
      {connectors.filter((x)=>otherConnectors.includes(x.id)).map((connector) => (
            <ConnectorBox connector={connector} ></ConnectorBox>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}
// export DefaultConnectors, OtherConnectors, Connectors
// export default Connectors