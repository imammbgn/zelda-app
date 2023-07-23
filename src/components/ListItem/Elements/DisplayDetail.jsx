import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartSlice";
import DisplayBtn from "./DisplayBtn";
import { Link } from "react-router-dom";
import useToast  from "../../utils/useToast";

const DisplayDetail = ({ name, price, id }) => {
  const dispatch = useDispatch();
  const { showPop, toastClick } = useToast()

  const PopupAlert = (add) => {
    let message

    if (add === "cart") {
      dispatch(addToCart({ id, qty: 1 }));
      message = "Barang Ditambahkan Ke Keranjang";
    } else {
      message = "Ditambahkan Ke Wishlist";
    }

    toastClick(message)

  };

  return (
    <>
      <div className="flex flex-col items-center lg:max-w-[300px] lg:mb-10">
        <Link
          to={`/product/${id}`}
          className="flex flex-col justify-center items-center"
        >
          <h2 className="font-semibold flex-wrap mb-1 lg:text-xl text-center cursor-pointer">
            {name}
          </h2>
          <p className="text-md cursor-pointer mb-2">{price}</p>
        </Link>
        <DisplayBtn onclick={PopupAlert} />
      </div>
      <div className="fixed flex flex-col-reverse bottom-10 right-[50%] translate-x-[50%] md:translate-x-0 md:right-6 z-10">
        {showPop?.map((toast) => {
          return (
            <div
              key={toast.id}
              className="rounded-xl px-3 h-[40px] bg-lime-600 flex justify-center items-center shadow-lg duration-500 ease-in-out mb-2"
            >
              <p className="font-semibold text-slate-50">{toast.message}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayDetail;
