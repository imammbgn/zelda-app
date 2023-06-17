const Button = (props) => {
  const { children, onclick } = props;
  return (
    <div
      onClick={onclick}
      className="flex justify-center items-center mt-7 mb-2"
    >
      <button className="w-48 h-12 rounded-md bg-zinc-800 text-sm text-slate-50">
        {children}
      </button>
    </div>
  );
};

export default Button;
