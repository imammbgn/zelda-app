import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AuthContext from "../../config/auth/AuthContext";
import { useReduceQty } from "../utils/useReduceQty";
import NotifPopUp from "./Elements/NotifPopUp";
import { useNotifCart } from "../utils/useNotifCart";
import CartIcon from "../ListItem/Elements/CartIcon";
import DropdownLayout from "./Elements/DropdownLayout";
import useGet from "../../config/api";
import useOutDropdown from "../utils/useOutDropdown";
import useToast from "../utils/useToast";

const Navbar = ({ onclick }) => {
  const [offCanvas, setOffCanvas] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const { showPop, toastClick } = useToast()
  const profileDropRef = useRef();
  const totalQty = useReduceQty();
  const navigate = useNavigate();
  const { data, loading, error } = useGet(
    "https://parseapi.back4app.com/classes/products"
  );

  useOutDropdown(profileDropRef, setDropDown);

  const auth = AuthContext();

  const toCart = () => {
    if (totalQty < 1) {
      toastClick();
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
        className={`flex w-full justify-between items-center h-20 lg:h-[86px] px-5 lg:px-0 min-[1440px]:h-28 lg:max-w-[1112px] md:w-auto mx-auto transition-all duration-500 ${
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
        <div
          className={`ml-5 lg:ml-0 cursor-pointer 
          `}
        >
          <Link to="/">
            <picture>
            <source srcSet={scrollPosition > 30 ? "/images/zelda-white.png" : undefined} />
            <img src="/images/zelda-black.png" className="w-[90px] lg:w-[110px]" alt="logo"/>
            </picture>
          </Link>
        </div>

        <ul className="lg:flex hidden gap-5 cursor-pointer">
          <li
            className={`px-4 text-sm font-semibold cursor-pointer ${
              scrollPosition > 30 && "text-zinc-50"
            }`}
          >
            <Link to="/" onClick={scrollToTop}>
              HOME
            </Link>
          </li>
          <li
            className={`px-4 text-sm font-semibold cursor-pointer ${
              scrollPosition > 30 && "text-zinc-50"
            }`}
            onClick={onclick}
          >
            CATEGORIES
          </li>
          <li
            className={`px-4 text-sm font-semibold cursor-pointer ${
              scrollPosition > 30 && "text-zinc-50"
            }`}
          >
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        <ul className="flex justify-center items-center lg:mb-1">
          <li onClick={toCart}>
            <Link
              to={`${totalQty > 0 ? "/cart" : "/"}`}
              className="flex justify-center items-center"
            >
              <div className="relative w-content">
                <CartIcon position={scrollPosition} />
                <div
                  className={`${
                    totalQty > 0 ? "flex" : "hidden"
                  } absolute -top-4 -left-2 h-7 px-2 bg-red-500 items-center justify-center 
            text-slate-50 font-medium rounded-2xl`}
                >
                  {totalQty}
                </div>
              </div>
              <p
                className={`px-2 text-sm font-semibold cursor-pointer hidden lg:inline-block mt-1 ${
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
          <li className="flex justify-center items-center">
            <div className="hidden lg:flex flex-row justify-center items-center py-3">
              <div
                className={`text-sm font-semibold tracking-wide ${
                  scrollPosition > 30 && "text-zinc-50"
                }`}
              >
                {localStorage.length === 0 && (
                  <button
                    className={`px-4 py-2 text-sm tracking-wider hover:border-2 hover:bg-zinc-50 hover:border-zinc-800 hover:text-zinc-800 transition-all duration-300 cursor-pointer ${
                      scrollPosition > 30
                        ? "bg-zinc-50 text-zinc-900"
                        : "bg-zinc-900 text-zinc-50"
                    } rounded-full text-center mt-1`}
                    onClick={() => {
                      if (localStorage.length === 0) {
                        navigate("/login");
                      }
                      return null;
                    }}
                  >
                    LOGIN
                  </button>
                )}
              </div>

              {localStorage.length > 0 && (
                <div
                  ref={profileDropRef}
                  className={`flex relative border-[2.5px] ${
                    scrollPosition > 30 ? "border-zinc-50" : "border-zinc-800"
                  } w-10 h-10 rounded-full cursor-pointer transition-all duration-300 mt-1 justify-center items-center`}
                  onClick={() => setDropDown(!dropDown)}
                >
                  <div>
                    <p
                      className={`text-md font-semibold ${
                        scrollPosition > 30 && "text-zinc-50"
                      }`}
                    >
                      {localStorage
                        .getItem("emailUser")
                        .slice(0, 2)
                        .toUpperCase()}
                    </p>
                  </div>
                  {dropDown && (
                    <DropdownLayout
                      onclick={handleLogout}
                    />
                  )}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>

      <div className="fixed flex flex-col top-24 md:top-32 right-[50%] translate-x-[50%] z-10">
      {showPop?.map((toast) => {
        return (
          <NotifPopUp key={toast.id} msg="Keranjang Kosong"/>
        )
      })}
      </div>


      {/* SECTION MOBILE */}

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
            className="w-9/12 h-12 text-xl px-3 py-2 rounded-lg bg-zinc-50"
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
                    key={val.objectId}
                  >
                    <li className="text-lg border-b-2 border-zinc-200 pb-1 w-full h-full text-center hover:text-zinc-400">
                      <Link
                        to={`/product/${val.objectId}`}
                        onClick={() => setOffCanvas(!offCanvas)}
                      >
                        {val.name}
                      </Link>
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
          <li className="text-3xl  font-medium text-slate-50">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <div className="text-3xl cursor-pointer tracking-wide font-medium text-slate-50">
              <p
                onClick={() => {
                  if (localStorage.length === 0) {
                    navigate("/login");
                  }
                  return null;
                }}
              >
                {localStorage.length > 0
                  ? `HI ${localStorage.getItem("emailUser") || ""}`
                  : "LOGIN"}
              </p>
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
