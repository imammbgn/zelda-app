import { useState } from "react";
import { Link } from "react-router-dom";
import useGet from "../../config/api";
import { useDebounce } from "../utils/useDebounce";
import SearchIcon from "../ListItem/Elements/SearchIcon";

const SearchBar = ({ position }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchDebounced = useDebounce(searchValue, 500);
  const { data } = useGet("https://ill-pink-bison-sari.cyclic.app/products");

  return (
    <div className="relative lg:flex hidden flex-row mx-5 justify-center items-center mt-1">
      <label htmlFor="searchIcon">
        <SearchIcon position={position} />
      </label>
      <input
        className={`px-2 py-1 h-7 mx-2 input w-full rounded-full max-w-xs border-2 border-zinc-900`}
        type="search"
        id="searchIcon"
        onChange={(e) => setSearchValue(e.target.value)}
      />
        <div
          className={`absolute top-9 left-8 flex-col bg-white justify-center items-center w-full rounded-b-xl overflow-hidden z-10`}
        >
          {data
            .filter((val) => {
              if (
                searchDebounced.length > 1 &&
                val.name.toLowerCase().includes(searchDebounced.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="border-b-2 border-slate-200 py-2" key={val.id}>
                  <Link
                    to={`/product/${val.id}`}
                    className="text-zinc-900 px-2 cursor-pointer"
                  >
                    {val.name}
                  </Link>
                </div>
              );
            })}
        </div>
    </div>
  );
};

export default SearchBar;
