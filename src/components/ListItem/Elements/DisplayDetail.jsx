import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartSlice";
import { useState } from "react";
import DisplayBtn from "./DisplayBtn";
import { Link } from "react-router-dom";

const DisplayDetail = ({ name, price, id }) => {
  const dispatch = useDispatch();
  const [showPop, setShowPop] = useState(false);

  const PopupAlert = (add) => {
    setShowPop(!showPop);
    setTimeout(() => {
      setShowPop(false);
    }, 2000);
    if(add === "cart"){
      dispatch(addToCart({ id, qty: 1 }));
    }
    else{
      console.log("add wishlist")
    }
  };

  return (
    <>
      <div className="flex flex-col items-center lg:max-w-[300px] lg:mb-10">
        <Link to={`/product/${id}`} className="flex flex-col justify-center items-center">
          <h2 className="font-semibold flex-wrap mb-1 lg:text-xl text-center cursor-pointer">
            {name}
          </h2>
          <p className="text-md cursor-pointer mb-2">{price}</p>
        </Link>
        <DisplayBtn onclick={PopupAlert} />
      </div>
      {showPop && (
        <div className="fixed bottom-10 right-[50%] translate-x-[50%] md:translate-x-0 md:right-6 z-10">
          <div className="rounded-xl px-3 h-[40px] bg-lime-600 flex justify-center items-center shadow-lg duration-500 ease-in-out">
            <p className="font-semibold text-slate-50">
              Barang Ditambahkan Ke Keranjang
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayDetail;
