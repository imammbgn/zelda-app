const NotifPopUp = () => {
  return (
    <div className="fixed top-24 md:top-32 right-[50%] translate-x-[50%] z-10">
      <div className="w-full rounded-xl px-3 h-[40px] bg-red-600 flex justify-center items-center shadow-lg duration-500 ease-in-out">
        <p className="font-semibold text-slate-50">Keranjang Kosong</p>
      </div>
    </div>
  );
};

export default NotifPopUp;
