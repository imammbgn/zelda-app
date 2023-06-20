const TemplateCard = (props) => {
  let { children, icon, h1 } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-10 w-fit">
      <div className="flex justify-center items-center rounded-full bg-neutral-200 w-[60px] h-[60px]">
        {icon}
      </div>
      <h1 className="font-semibold text-zinc-900 text-md mt-2">{h1}</h1>
      <p className="text-sm text-zinc-900  text-center leading-6 w-[270px]">
        {children}
      </p>
    </div>
  );
};

export default TemplateCard;
