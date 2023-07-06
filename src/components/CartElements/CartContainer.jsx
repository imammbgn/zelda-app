import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/actions/cartSlice";
import { useNavigate } from "react-router-dom";
import Input from "../LoginForm/Elements/Input";
import OrderSummary from "./OrderSummary";
import TableCart from "./TableCart";
import { useReduceQty } from "../utils/useReduceQty";
import NotifPopUp from "../Navbar/Elements/NotifPopUp";
import { useNotifCart } from "../utils/useNotifCart";

const CartContainer = () => {
  const [inputUser, setInputUser] = useState({
    fullname: "",
    card: "",
    expiryDate: "",
    cvcDate: "",
  });
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQty = useReduceQty();
  const { isEmptyCart, handleEmptyCart } = useNotifCart();
  // const debounceInput = useDebounce(inputPayment, 3000)

  const handleShowModal = () => {
    if (totalQty == 0) {
      handleEmptyCart();
    } else {
      setShowModal(!showModal);
    }
  };

  const handleChange = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value,
    });
  };

  const isCheckOut = (e) => {
    e.preventDefault();
    const item = localStorage.length;
    if (item > 0) {
      dispatch(resetCart());
      navigate("/succesPayment");
    } else {
      navigate("/login");
    }
  };

  const tableTotal = (params) => {
    setTotal(params);
  };

  return (
    <div className="flex flex-col justify-center items-center md:max-w-[1024px] lg:max-w-[1240px] mx-auto px-3">
      <h1 className="text-3xl font-medium mt-10 mb-10 md:mb-20">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-5 w-full md:h-[800px] px-2">
        <div className="flex flex-col w-12/12 justify-center items-center md:w-[900px] md:h-[500px] relative">
          <TableCart totalState={tableTotal} />
        </div>
        <OrderSummary total={total} onclick={handleShowModal} />

        {/* modal checkout */}
        {showModal && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
            <form onSubmit={isCheckOut}>
              <div className="container flex flex-col gap-8 rounded-lg max-w-xs md:max-w-xl px-7 md:px-10 py-12 justify-center items-center absolute md:fixed z-10 top-28 md:top-32 right-[50%] translate-x-[50%] bg-zinc-300">
                <div className="w-full md:w-10/12 h-full flex flex-col gap-1">
                  <Input
                    children="Fullname"
                    type="text"
                    id="fullname"
                    name="fullname"
                    htmlFor="fullname"
                    onchange={handleChange}
                    variant="formPayment"
                    placeholder="Your Name.."
                    value={inputUser.fullname}
                  />
                </div>
                <div className="w-full md:w-10/12 h-full flex flex-col gap-1">
                  <Input
                    children="Card Number"
                    type="number"
                    id="card"
                    name="card"
                    htmlFor="card"
                    onchange={handleChange}
                    variant="formPayment"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                    value={inputUser.card}
                  />
                </div>
                <div className="w-full md:w-10/12 h-full flex flex-col gap-1">
                  <Input
                    children="Expiry Date"
                    type="date"
                    id="expiry"
                    name="expiryDate"
                    htmlFor="expiry"
                    onchange={handleChange}
                    variant="formPayment"
                    placeholder=""
                    value={inputUser.expiryDate}
                  />
                </div>
                <div className="w-full md:w-10/12 h-full flex flex-col gap-1">
                  <Input
                    children="CVC"
                    type="date"
                    id="cvc"
                    name="cvcDate"
                    htmlFor="cvc"
                    onchange={handleChange}
                    variant="formPayment"
                    placeholder=""
                    value={inputUser.cvcDate}
                  />
                </div>
                <div className="flex gap-5 md:gap-4 self-start ml-0 md:ml-10">
                  <button
                    type="submit"
                    className="px-7 py-2 md:px-10 md:py-3 bg-zinc-900 rounded-lg text-white text-lg font-medium"
                  >
                    Submit
                  </button>
                  <button
                    className="px-7 py-2 md:px-10 md:py-3 bg-zinc-50 rounded-lg text-zinc-900 text-lg font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(!showModal);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </>
        )}

        {isEmptyCart && <NotifPopUp />}
      </div>
    </div>
  );
};

export default CartContainer;
