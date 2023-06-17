const MainBg = ({ img }) => {
  return (
    <div
      className="absolute inset-0 z-0 w-full h-full bg-cover bg-center blur-sm"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
};

export default MainBg;
