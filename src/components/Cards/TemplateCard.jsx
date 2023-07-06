const TemplateCard = (props) => {
  let { children, icon, h1 } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:max-xl:gap-4 mt-6 lg:mt-16 w-fit lg:w-[6/12]">
      <div className="flex justify-center items-center rounded-full bg-neutral-200 w-12 h-12">
        <img src={icon} alt="box-car" />
      </div>
      <h1 className="font-semibold text-zinc-900 text-xs lg:text-lg mt-1 lg:mt-2 text-center">{h1}</h1>
      <p className="text-[0.7rem] lg:text-xs min-[1440px]:text-sm text-zinc-900  text-center leading-4 lg:leading-6 w-[170px] lg:w-auto">
        {children}
      </p>
    </div>
  );
};

export default TemplateCard;
