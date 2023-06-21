import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase/firebase-config";
import { isLogin } from "../../redux/actions/loginSlice";
import { resetCart } from "../../redux/actions/cartSlice";

const Navbar = ({ onclick }) => {
  const cart = useSelector((state) => state.cart.data);
  const dataLogin = useSelector((state) => state.login.auth);
  const [offCanvas, setOffCanvas] = useState(false);
  const [totalQty, setTotalQty] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0)

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      dispatch(resetCart(0));
      localStorage.clear("emailUsers");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () =>{
      const currentPosition = window.pageYOffset
      setScrollPosition(currentPosition)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  },[])

  return (
    <nav className={`sticky top-0 w-full transition-all duration-500 ${scrollPosition > 30 ? "bg-zinc-800" : "bg-slate-50"} z-50`}>
      <div className={`flex w-full justify-between items-center h-20 lg:h-[86px] min-[1440px]:h-28 lg:max-w-[1240px] md:w-auto mx-auto px-7 transition-all duration-500 ${scrollPosition > 30 ? "bg-zinc-800" : "bg-slate-50"} z-10`}>
        <img
          src="/svg/menu.svg"
          className="lg:hidden w-7"
          onClick={() => setOffCanvas(!offCanvas)}
        />
        <h1 className={`w-auto lg:ml-[50px] font-semibold text-4xl cursor-pointer font-gallient tracking-wide ${scrollPosition > 30 && "text-zinc-50"}`}>
          <Link to="/">Zelda</Link>
        </h1>
        <ul className="lg:flex hidden gap-8 mr-5 cursor-pointer">
          <li>
            <Link
              to="/"
              onClick={scrollToTop}
              className={`px-4 text-sm cursor-pointer ${scrollPosition > 30 && "text-zinc-50"}`}
            >
              HOME
            </Link>
          </li>
          <li className={`px-4 text-sm cursor-pointer ${scrollPosition > 30 && "text-zinc-50"}`} onClick={onclick}>
            CATEGORIES
          </li>
          <li className={`px-4 text-sm cursor-pointer ${scrollPosition > 30 && "text-zinc-50"}`}>ABOUT</li>
        </ul>
        <ul className="flex">
          <Link to={`${totalQty > 0 ? "/cart" : ""}`} className="flex">
            <div className="relative w-content">
              <ShoppingCartIcon className="cursor-pointer" sx={[scrollPosition > 30 && { color: "white" }]} fontSize="medium" />
              <div
                className={`${
                  totalQty > 0 ? "flex" : "hidden"
                } absolute -top-5 -left-4 h-7 px-2 bg-red-500 items-center justify-center 
            text-slate-50 font-medium rounded-2xl`}
              >
                {totalQty}
              </div>
            </div>
            <li className={`px-2 text-sm cursor-pointer hidden lg:inline-block mt-1 ${scrollPosition > 30 && "text-zinc-50"}`}>
              CART
            </li>
          </Link>
          <SearchBar position={scrollPosition}/>
        </ul>
        <div className="hidden lg:flex flex-row justify-center items-center gap-10 px-3 py-3">
          <Link to="/login">
            <div className={`px-2 text-sm font-semibold cursor-pointer tracking-wide ${scrollPosition > 30 && "text-zinc-50"}`}>
              {dataLogin
                ? `HI ${localStorage.getItem("emailUser") || ""}`
                : "SIGN IN"}
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

      <div
        className={`fixed bg-zinc-900 top-0 h-screen w-full z-10 py-10 transition-all duration-300 ${
          !offCanvas ? "-left-full" : "-left-0"
        }`}
      >
        <div className="flex flex-row items-center justify-between px-5">
          <SearchOutlinedIcon fontSize="large" style={{ fill: "white" }} />
          <input
            type="text"
            id="search"
            placeholder="Search.."
            className="w-9/12 h-12 text-xl px-3 py-2 rounded-lg"
          />
          <img
            src="/svg/close.svg"
            className="w-8"
            onClick={() => setOffCanvas(!offCanvas)}
          />
        </div>
        <ul className="flex flex-col gap-14 mt-12 justify-center items-center">
          <li className="text-3xl  font-medium text-slate-50">
            <Link to="/" onClick={() => {scrollToTop, setOffCanvas(!offCanvas)}}>
              HOME
            </Link>
          </li>
          <li
            className="text-3xl  font-medium text-slate-50"
            onClick={() => {
              setOffCanvas(!offCanvas), onclick();
            }}
          >
            CATEGORIES
          </li>
          <li className="text-3xl  font-medium text-slate-50">ABOUT</li>

          <div className="text-3xl cursor-pointer tracking-wide font-medium text-slate-50">
            <Link to="/login">
              {dataLogin
                ? `HI ${localStorage.getItem("emailUser") || ""}`
                : "LOGIN"}
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
