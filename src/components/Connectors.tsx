import { Connector, useConnect } from 'wagmi'
import ConnectorBox from './Connector'

 function Connectors() {
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
export default Connectors