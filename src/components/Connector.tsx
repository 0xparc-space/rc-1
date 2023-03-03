import { Connector, useConnect } from 'wagmi'

const getImageName = (text:string) => {
	const imageMap = new Map([
		['metaMask', 'src/assets/metamask.svg'],
		['walletConnect', 'src/assets/walletConnect.svg'],
		['coinbaseWallet', 'src/assets/coinbase.svg'],
		['ledger', 'src/assets/ledger.svg'],
		['safe','src/assets/safe.svg']]
	)
	const res = imageMap.get(text)
	if (res!=undefined){
		return res
	}
	return 'default'
}
const ConnectorBox = ({connector}: {connector: Connector}) => {
	const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()
	console.log(connector)

	const img = getImageName(connector.id)

	return <>
	<div className="flex items-center justify-start my-2"> 
		<div className="h-7 w-7 rounded-xl bg-neutral-200">
			<img src={img} width={28}/>
		</div>
		<button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
		  className="text-sm ml-3 bg-white p-0 hover:outline-none border-0"
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
	</div>
	</>
}
export const ConnectorPlaceHolder = ({text, image}: {text: string, image: string}) => {
	return <>
	<div className="flex items-center justify-start my-2"> 
		<div className="h-7 w-7 rounded-xl bg-neutral-200">
		<img src={image} />

		</div>
		<p className="text-sm ml-3">{text}</p>
	</div>
	</>
}


export default ConnectorBox;