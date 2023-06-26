import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AuthContext from "../../config/auth/AuthContext";
import data from "../../TemplateData.json";

const Navbar = ({ onclick }) => {
  const cart = useSelector((state) => state.cart.data);
  // const dataLogin = useSelector((state) => state.login.auth); // redux state login
  const [offCanvas, setOffCanvas] = useState(false);
  const [totalQty, setTotalQty] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const auth = AuthContext();

  useEffect(() => {
    const cartQty = cart
      .map((item) => item.qty)
      .reduce((acc, cur) => acc + cur, 0);
    setTotalQty(cartQty);
  }, [cart]);

  const [isEmptyCart, setIsEmptyCart] = useState(false);

  const toCart = () => {
    if (totalQty < 1) {
      setIsEmptyCart(!isEmptyCart);
      setTimeout(() => {
        setIsEmptyCart(false);
      }, 2500);
      return clearTimeout();
    }
    return null;
  };

  const handleLogout = () => {
    auth.useLogout();
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full transition-all duration-500 ${
        scrollPosition > 30 ? "bg-zinc-800" : "bg-slate-50"
      } z-50`}
    >
      <div
        className={`flex w-full justify-between items-center h-20 lg:h-[86px] min-[1440px]:h-28 lg:max-w-[1240px] md:w-auto mx-auto px-7 transition-all duration-500 ${
          scrollPosition > 30 ? "bg-zinc-800" : "bg-slate-50"
        } z-10`}
      >
        <div className="lg:hidden">
          <MenuRoundedIcon
            onClick={() => setOffCanvas(!offCanvas)}
            sx={[scrollPosition > 30 && { color: "white" }]}
            fontSize="medium"
          />
        </div>
        <h1
          className={`w-auto lg:ml-[50px] font-semibold text-4xl cursor-pointer font-gallient tracking-wide ${
            scrollPosition > 30 && "text-zinc-50"
          }`}
        >
          <Link to="/">Zelda</Link>
        </h1>
        <ul className="lg:flex hidden gap-8 mr-5 cursor-pointer">
          <li
            className={`px-4 text-sm cursor-pointer ${
              scrollPosition > 30 && "text-zinc-50"
            }`}
          >
            <Link to="/" onClick={scrollToTop}>
              HOME
            </Link>
          </li>
          <li
            className={`px-4 text-sm cursor-pointer ${
              scrollPosition > 30 && "text-zinc-50"
            }`}
            onClick={onclick}
          >
            CATEGORIES
          </li>
          <li
            className={`px-4 text-sm cursor-pointer ${
              scrollPosition > 30 && "text-zinc-50"
            }`}
          >
            ABOUT
          </li>
        </ul>
        <ul className="flex">
          <li onClick={toCart}>
            <Link to={`${totalQty > 0 ? "/cart" : ""}`} className="flex">
              <div className="relative w-content">
                <ShoppingCartIcon
                  className="cursor-pointer"
                  sx={[scrollPosition > 30 && { color: "white" }]}
                  fontSize="medium"
                />
                <div
                  className={`${
                    totalQty > 0 ? "flex" : "hidden"
                  } absolute -top-5 -left-4 h-7 px-2 bg-red-500 items-center justify-center 
            text-slate-50 font-medium rounded-2xl`}
                >
                  {totalQty}
                </div>
              </div>
              <p
                className={`px-2 text-sm cursor-pointer hidden lg:inline-block mt-1 ${
                  scrollPosition > 30 && "text-zinc-50"
                }`}
              >
                CART
              </p>
            </Link>
          </li>
          <li>
            <SearchBar position={scrollPosition} />
          </li>
        </ul>
        <div className="hidden lg:flex flex-row justify-center items-center gap-10 px-3 py-3">
          <Link to="/login">
            <div
              className={`px-2 text-sm font-semibold cursor-pointer tracking-wide ${
                scrollPosition > 30 && "text-zinc-50"
              }`}
            >
              {localStorage.length > 0
                ? `HI ${localStorage.getItem("emailUser") || ""}`
                : "SIGN IN"}
            </div>
          </Link>
          {localStorage.length > 0 && (
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

      {isEmptyCart ? (
        <div className="fixed top-24 md:top-32 right-[50%] translate-x-[50%] z-10">
          <div className="w-full rounded-xl px-3 h-[40px] bg-red-600 flex justify-center items-center shadow-lg duration-500 ease-in-out">
            <p className="font-semibold text-slate-50">Keranjang Kosong</p>
          </div>
        </div>
      ) : null}

      <div
        className={`fixed bg-zinc-900 top-0 h-screen w-full z-10 py-10 transition-all duration-300 ${
          !offCanvas ? "-left-full" : "-left-0"
        }`}
      >
        <div className="relative flex flex-row items-center justify-between px-5">
          <SearchOutlinedIcon fontSize="large" style={{ fill: "white" }} />
          <input
            type="text"
            id="search"
            placeholder="Search.."
            className="w-9/12 h-12 text-xl px-3 py-2 rounded-lg"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div
            className={`${
              searchValue.length > 1 ? "flex" : "hidden"
            } w-8/12 absolute flex-col bg-slate-50 top-14 left-[50%] translate-x-[-50%] rounded-lg overflow-hidden`}
          >
            {data
              .filter((val) => {
                if (
                  val.name.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <ul
                    className="px-2 py-2 flex flex-col justify-center items-center gap-3"
                    key={val.id}
                  >
                    <li className="text-lg border-b-2 border-zinc-200 pb-1 w-full h-full text-center hover:text-zinc-400">
                      <Link to={`/product/${val.id}`} onClick={() => setOffCanvas(!offCanvas)}>{val.name}</Link>
                    </li>
                  </ul>
                );
              })}
          </div>

          <img
            src="/svg/close.svg"
            alt="close-icon"
            className="w-8"
            onClick={() => setOffCanvas(!offCanvas)}
          />
        </div>
        <ul className="flex flex-col gap-14 mt-12 justify-center items-center">
          <li className="text-3xl font-medium text-slate-50">
            <Link
              to="/"
              onClick={() => {
                setOffCanvas(!offCanvas), scrollToTop;
              }}
            >
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
          <li>
            <div className="text-3xl cursor-pointer tracking-wide font-medium text-slate-50">
              <Link to="/login">
                {localStorage.length > 0
                  ? `HI ${localStorage.getItem("emailUser") || ""}`
                  : "LOGIN"}
              </Link>
            </div>
          </li>
          <li>
            {localStorage.length > 0 && (
              <div
                className="bg-zinc-800 text-sm text-white font-semibold tracking-wider
           px-4 py-2 rounded-full cursor-pointer hover:bg-slate-50 hover:text-zinc-800 
           hover:border-2 hover:border-zinc-800 transition-all duration-300"
                onClick={handleLogout}
              >
                LOGOUT
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
