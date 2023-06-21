const TemplateCard = (props) => {
  let { children, icon, h1 } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:gap-3 mt-6 lg:mt-16 w-fit lg:w-6/12">
      <div className="flex justify-center items-center rounded-full bg-neutral-200 px-2 py-2">
        {icon}
      </div>
      <h1 className="font-semibold text-zinc-900 text-xs lg:text-lg mt-1 lg:mt-2 text-center">{h1}</h1>
      <p className="text-[0.7rem] lg:text-sm text-zinc-900  text-center leading-4 lg:leading-6 w-[170px] lg:w-auto">
        {children}
      </p>
    </div>
  );
};

export default TemplateCard;
