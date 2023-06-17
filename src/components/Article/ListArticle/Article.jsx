const Article = (props) => {
  const { index } = props
  return (
    <div
      className={`${ index === 1 ? "hidden" : "block"} flex flex-col items-center absolute top-[300px] px-3 py-3 ${
        index === 1 ? "right-[350px]" : "left-[350px]"
      }`}
    >
      <h1 className="text-4xl font-extralight tracking-widest mb-3">
      HOTLIST
      </h1>
      <p className="text-6xl font-semibold font-glitten mb-3 tracking-wide">
        THE WINTER
      </p>
      <p className="text-xl font-light text-center w-[500px] ">May 2023</p>
      <button className="rounded-full mt-9 text-white px-[70px] py-[16px] text-xs bg-zinc-950 hover:bg-slate-50 hover:text-zinc-950
      hover:font-semibold hover:border-zinc-950 hover:border-2 duration-500">
        VIEW COLLECTION
      </button>
    </div>
  );
};

export default Article;
