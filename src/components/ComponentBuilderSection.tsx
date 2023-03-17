import { useState } from "react"

function ComponentBuilderSection() {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [selectedMode, setSelectedMode] = useState(0)
	const [selectedRadius, setSelectedRadius] = useState(0)
	const [selectColour, setSelectColor]= useState(0)
	return (
	  <div className="w-2/6 h-full">
		<div className="h-fit w-full bg-light-neutral-100">
		  <div className="flex p-8 space-x-2">
			<div className="w-fit text-center px-2 py-1 rounded-full bg-light-neutral-300">
			  <p className="font-medium">EVM</p>
			</div>
			<div className="w-fit text-center px-2 py-1 rounded-full bg-light-neutral-300">
			  <p className="font-medium">Ethereum</p>
			</div>
		  </div>
		  <div className="px-8">
			<p className="font-bold text-3xl font">Wallet Connect Component</p>
		  </div>
		  <div className="p-8">
			<p>
			  0xStardust is a library of beautifully crafted, ready to use react
			  components which are beautiful, functional and robust
			</p>
		  </div>
		</div>
		<div className="h-fit w-full">
		  <div className="px-8 py-4">
			<p className="font-bold text-lg  py-4">Modal Type</p>
			<div className='space-x-2'>
			  <button onClick={() => setSelectedIndex(0)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Large</button>
			  <button onClick={() => setSelectedIndex(1)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Compact</button>
			</div>
		  </div>
		  <div className="px-8 py-4">
			<p className="font-bold text-lg  py-4">Mode</p>
			<div className='space-x-2'>
			  <button onClick={() => setSelectedMode(0)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Light</button>
			  <button onClick={() => setSelectedMode(1)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Dark</button>
			</div>
		  </div>
		  <div className="px-8 py-4">
			<p className="font-bold text-lg  py-4">Accent Color</p>
			<div className='space-x-4'>
			  <button onClick={() => setSelectColor(0)} className='rounded-full p-2 bg-blue-600 hover:ring-8 hover:ring-blue-100 text-sm'></button>
			  <button onClick={() => setSelectColor(1)} className='rounded-full p-2 bg-pink-600 hover:ring-8 hover:ring-pink-100  text-sm'></button>
			  <button onClick={() => setSelectColor(2)} className='rounded-full p-2 bg-purple-600 hover:ring-8 hover:ring-purple-100 text-sm'></button>
			  <button onClick={() => setSelectColor(3)} className='rounded-full p-2 bg-green-600 hover:ring-8 hover:ring-green-100 text-sm'></button>
			  <button onClick={() => setSelectColor(3)} className='rounded-full p-2 bg-yellow-400 hover:ring-8 hover:ring-yellow-100 text-sm'></button>
  
			</div>
		  </div>
		  <div className="px-8 py-4">
			<p className="font-bold text-lg py-4">Border Radius</p>
			<div className='space-x-2'>
			  <button onClick={() => setSelectedRadius(0)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>None</button>
			  <button onClick={() => setSelectedRadius(1)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Small</button>
			  <button onClick={() => setSelectedRadius(2)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Medium</button>
			  <button onClick={() => setSelectedRadius(3)} className='rounded-full px-2 py-1 bg-black text-xs bg-opacity-10 hover:ring hover:bg-white'>Large</button>
			</div>
		  </div>
		</div>
	  </div>
	)
  }

  export default ComponentBuilderSection;