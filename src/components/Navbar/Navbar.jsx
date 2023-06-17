import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "./SearchBar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase/firebase-config";
import { isLogin } from "../../redux/actions/loginSlice";
import { resetCart } from "../../redux/actions/cartSlice";

const Navbar = ({ onclick }) => {
  const cart = useSelector((state) => state.cart.data);
  const dataLogin = useSelector((state) => state.login.auth);
  const [totalQty, setTotalQty] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const cartQty = cart
      .map((item) => item.qty)
      .reduce((acc, cur) => acc + cur, 0);
    setTotalQty(cartQty);
  }, [cart]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(isLogin(false));
      dispatch(resetCart(0))
      localStorage.clear("emailUsers")
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1300px] md:w-auto mx-auto px-7">
      <Link to="/">
        <h1 className="w-auto ml-[50px] font-semibold text-4xl cursor-pointer font-gallient tracking-wide">
          Zelda
        </h1>
      </Link>
      <ul className="flex gap-8 mr-5 cursor-pointer">
        <Link to="/">
          <li className="px-4 text-sm cursor-pointer">Home</li>
        </Link>
        <li className="px-4 text-sm cursor-pointer" onClick={onclick}>
          Categories
        </li>
        <li className="px-4 text-sm cursor-pointer">About</li>
      </ul>
      <ul className="flex ">
        <Link to={`${totalQty > 0 ? "/cart" : ""}`} className="flex">
          <div className="relative w-content">
            <ShoppingCartIcon className="cursor-pointer" />
            <div
              className={`${
                totalQty > 0 ? "flex" : "hidden"
              } absolute -top-5 -left-4 h-7 px-2 bg-red-500 items-center justify-center 
            text-slate-50 font-medium rounded-2xl`}
            >
              {totalQty}
            </div>
          </div>
          <li className="px-2 text-sm cursor-pointer">Cart</li>
        </Link>
        <SearchBar />
      </ul>
      <div className="flex flex-row justify-center items-center gap-10 px-3 py-3">
        <Link to="/login">
          <div className="px-2 text-sm font-semibold cursor-pointer tracking-wide">
            {dataLogin ? `HI ${localStorage.getItem("emailUser") || ""}` : "SIGN IN"}
          </div>
        </Link>
        {dataLogin && (
          <div
            className="bg-zinc-800 text-sm text-white font-semibold tracking-wider
           px-4 py-2 rounded-full cursor-pointer hover:bg-slate-50 hover:text-zinc-800 
           hover:border-2 hover:border-zinc-800 transition-all duration-300"
            onClick={handleLogout}
          >
            LOGOUT
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
