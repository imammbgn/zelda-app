import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/actions/cartSlice"
import { useState } from "react";
import DisplayBtn from "./DisplayBtn"

const DisplayDetail = ({ name, price, id }) => {
  const dispatch = useDispatch()
  const [showPop, setShowPop] = useState(false);

  const PopupAlert = () => {
    setShowPop(!showPop);
    setTimeout(() => {
      setShowPop(false);
    }, 2000);
    dispatch(addToCart({id, qty: 1}))
  };

  return (
    <>
    <div className="flex flex-col items-center lg:max-w-[300px] lg:mb-10">
        <h2 className="font-semibold flex-wrap mb-1 lg:text-xl text-center cursor-pointer">{name}</h2>
        <p className="text-md cursor-pointer mb-2">{price}</p>
        <DisplayBtn onclick={() => PopupAlert()}/>
    </div>
    {showPop && (
      <div className="fixed bottom-10 right-6 z-10">
        <div className="rounded-xl px-3 h-[40px] bg-lime-600 flex justify-center items-center shadow-lg duration-500 ease-in-out">
          <p className="font-semibold text-slate-50">Barang Ditambahkan Ke Keranjang</p>
        </div>
      </div>
    )}
    </>

  )
}

export default DisplayDetail