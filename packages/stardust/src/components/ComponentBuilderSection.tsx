import { useContext } from "react";
import ProfileContext from "../utils/ProfileContext";
import { useIsMobile } from "../utils/useIsMobile";

function ComponentBuilderSection() {
  const { setProfile, dark } = useContext(ProfileContext);
  const isMobile = useIsMobile();

  // const [profile, setProfile] = useState<Partial<Profile>>();
  if(isMobile){
    return <></>
  }
  return (
    <div className="w-[50%] m-3 rounded-2xl h-full bg-white">
      <div className="h-fit w-full rounded-t-2xl bg-gray-100">
        <div className="flex p-8 space-x-2">
          <div className="w-fit text-center px-4 py-1 rounded-full bg-light-neutral-300">
            <p className="font-medium">EVM</p>
          </div>
          <div className="w-fit text-center px-4 py-1 rounded-full bg-light-neutral-300">
            <p className="font-medium">Ethereum</p>
          </div>
        </div>
        <div className="px-8">
          <p className="font-bold text-3xl font">Wallet Connect Component</p>
        </div>
        <div className="p-8">
          <p>
            A fully functional wallet connect customizable react compnent.
            Currently supports Ethereum & Solana
          </p>
        </div>
      </div>
      <div className="h-fit w-full">
        <div className="px-8 py-4">
          <p className="font-bold text-lg  py-4">Modal Type</p>
          <div className="space-x-2">
            <button
              onClick={() => {
                setProfile({ index: 0 });
                console.log("setting up large");
              }}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              Large
            </button>
            <button
              onClick={() => {
                setProfile({ index: 1 });
                console.log("setting up compact");
              }}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              Compact
            </button>
          </div>
        </div>
        <div className="px-8 py-4">
          <p className="font-bold text-lg  py-4">Mode</p>
          <div className="space-x-2">
            <button
              onClick={() => {
                localStorage.theme = "light";
                setProfile({ dark: false });
                console.log(dark);
              }}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              Light
            </button>
            <button
              onClick={() => {
                setProfile({ dark: true });
                localStorage.theme = "dark";
              }}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              Dark
            </button>
          </div>
        </div>
        <div className="px-8 py-4">
          <p className="font-bold text-lg  py-4">Accent Color</p>
          <div className="space-x-4">
            <button
              onClick={() => setProfile({ color: 0 })}
              className="rounded-full p-2 bg-blue-600 hover:ring-8 hover:ring-blue-100 text-sm"
            ></button>
            <button
              onClick={() => setProfile({ color: 1 })}
              className="rounded-full p-2 bg-pink-600 hover:ring-8 hover:ring-pink-100  text-sm"
            ></button>
            <button
              onClick={() => setProfile({ color: 2 })}
              className="rounded-full p-2 bg-purple-600 hover:ring-8 hover:ring-purple-100 text-sm"
            ></button>
            <button
              onClick={() => setProfile({ color: 3 })}
              className="rounded-full p-2 bg-green-600 hover:ring-8 hover:ring-green-100 text-sm"
            ></button>
            <button
              onClick={() => setProfile({ color: 4 })}
              className="rounded-full p-2 bg-yellow-400 hover:ring-8 hover:ring-yellow-100 text-sm"
            ></button>
          </div>
        </div>
        <div className="px-8 py-4">
          <p className="font-bold text-lg py-4">Border Radius</p>
          <div className="space-x-2">
            <button
              onClick={() => setProfile({ radius: 0 })}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              None
            </button>
            <button
              onClick={() => setProfile({ radius: 1 })}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              Small
            </button>
            <button
              onClick={() => setProfile({ radius: 2 })}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              Medium
            </button>
            <button
              onClick={() => setProfile({ radius: 3 })}
              className="rounded-full px-4 py-2 bg-black text-sm bg-opacity-10 hover:ring-0 border-0 hover:bg-gray-300"
            >
              Large
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentBuilderSection;
