import DropSort from "./DropSort";

const Button = ({ show, onclick, dropRef }) => {
  return (
    <div className="relative" ref={dropRef}>
      <div
        onClick={onclick}
        className="flex w-[98px] h-8 bg-zinc-900 rounded-full cursor-pointer"
      >
        <span className="text-slate-50 text-xs font-medium m-auto">
          SORT BY
        </span>
      </div>
      <DropSort show={show} />
    </div>
  );
};

export default Button;
