const Connector = ({text}: {text: string}) => {
	return <>
	<div className="flex items-center justify-start my-2"> 
		<div className="h-7 w-7 rounded-xl bg-neutral-200"></div>
		<p className="text-sm ml-3">{text}</p>
	</div>
	</>
}


export default Connector;