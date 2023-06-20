const Article = (props) => {
  const { index, season, month } = props
  return (
    <div
      className={`${ index === 1 ? "hidden" : "block"} flex flex-col items-center absolute top-8 left-10 lg:top-[150px] xl:top-[170px] px-3 py-3 ${
        index === 1 ? "xl:right-[350px]" : "xl:left-[200px]"
      }`}
    >
      <h1 className="text-md xl:text-4xl lg:text-xl lg:mb-1 xl:mb-3 font-extralight tracking-widest">
      HOTLIST
      </h1>
      <p className="text-xl xl:text-6xl lg:text-3xl xl:mb-2 font-semibold font-glitten tracking-wide">
       {season}
      </p>
      <p className="text-xs xl:text-xl lg:text-sm font-light text-center lg:w-[500px] ">{month}</p>
      <button className="rounded-full mt-2 xl:mt-4 text-white px-5 py-2 xl:px-[70px] xl:py-[16px] lg:px-[25px] lg:py-[7px] lg:text-[0.50rem] xl:text-xs text-[8px] bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950
      hover:font-semibold hover:border-zinc-950 hover:border-2 duration-500">
        VIEW COLLECTION
      </button>
    </div>
  );
};

export default Article;
