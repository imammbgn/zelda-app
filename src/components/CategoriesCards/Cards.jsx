const Cards = ({ text, img, height, pos }) => {
  return (
    <div className="w-fit hover:shadow-xl hover:shadow-slate-400 relative group">
      <div
        style={img}
        className={`${height} bg-cover ${pos} group-hover:scale-110 transition-all duration-500`}
      >
      </div>
        <button className="px-10 py-2 bg-slate-50 absolute bottom-3 right-10 lg:bottom-[22px] lg:left-[50px] font-semibold">
          {text}
        </button>
    </div>
  );
};

export default Cards;
