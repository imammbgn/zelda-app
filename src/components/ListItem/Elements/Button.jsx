const Button = () => {
  return (
    <div className="flex justify-between gap-3">
      <div className="flex w-[98px] h-8 bg-zinc-900 rounded-full cursor-pointer">
        <span className="text-slate-50 text-xs font-medium m-auto">
          SORT BY
        </span>
      </div>
      <div className="flex w-[98px] h-8 bg-zinc-900 rounded-full cursor-pointer">
        <span className="text-slate-50 text-xs font-medium m-auto">FILTER</span>
      </div>
    </div>
  );
};

export default Button;
