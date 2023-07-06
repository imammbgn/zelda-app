import { Link } from "react-router-dom";
import DropList from "./DropList";

const DropdownLayout = ({ onclick }) => {
  return (
    <div
      className={`absolute top-11 left-0 py-2 flex-col bg-white justify-center items-center w-40 
       rounded-xl overflow-hidden shadow-md shadow-zinc-400`}
    >
      <Link to="/">
        <DropList title="Your Profile" link="/" />
      </Link>
      <Link to="/">
        <DropList title="Settings" link="/" />
      </Link>
      <DropList title="Log Out" onclick={onclick} />
    </div>
  );
};

export default DropdownLayout;
