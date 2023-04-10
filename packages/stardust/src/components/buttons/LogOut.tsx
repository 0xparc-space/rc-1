import { useDisconnect } from "wagmi";

const LogoutBtn = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (boolean) => void;
}) => {
  const { disconnect } = useDisconnect();

  return (
    <>
      <div
        onClick={() => {
          disconnect();
          setTimeout(() => {
            setShow(false);
          }, 300);
        }}
        className="rounded-full transition group space-x-1 flex p-1 hover:w-20 duration-300 justify-between hover:justify-center items-center text-black dark:text-white py-1 cursor-pointer bg-light-neutral-100 dark:bg-dark-neutral-200 hover:bg-[#f7c1c1] hover:text-[#701212]"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
        <div className="text-xs whitespace-nowrap hidden group-hover:block transition -translate-x-10 group-hover:-translate-x-0 duration-150 break-keep">
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default LogoutBtn;
