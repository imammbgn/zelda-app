const Cards = ({ text, img }) => {
  return (
    <div className="overflow-hidden hover:shadow-xl hover:shadow-slate-400 relative group z-10">
      <div
        style={img}
        className="w-[375px] h-[500px] bg-center bg-cover group-hover:scale-125 transition-all duration-500"
      >
      </div>
        <button className="px-10 py-2 bg-slate-50 absolute bottom-[22px] right-[20px] font-semibold hover:scale-110 duration-200">
          {text}
        </button>
    </div>
  );
};

export default Cards;
