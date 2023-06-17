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
    <div className="flex flex-col items-center max-w-[300px] mb-10">
        <h2 className="font-semibold mb-1 text-xl text-center cursor-pointer">{name}</h2>
        <p className="text-md cursor-pointer mb-2">{price}</p>
        <DisplayBtn onclick={() => PopupAlert()}/>
    </div>
    {showPop && (
      <div className="fixed bottom-10 right-10 z-10">
        <div className="rounded-xl w-[200px] h-[40px] bg-zinc-800 flex justify-center items-center shadow-lg duration-500 ease-in-out">
          <p className="font-semibold text-slate-50">Item Add To Cart</p>
        </div>
      </div>
    )}
    </>

  )
}

export default DisplayDetail