import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../TemplateData.json";

const SearchBar = ({ position }) => {
  const [isShowSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const showSearch = () => {
    setShowSearch(!isShowSearch);
  };
  return (
    <div className="relative lg:flex hidden flex-row ml-9">
      <label htmlFor="searchIcon" onClick={showSearch}>
        <SearchOutlinedIcon className="cursor-pointer" sx={[position > 30 && { color: "white" }]}  />
      </label>
      <input
        className={`px-2 py-1 h-7 mx-2 input w-full max-w-xs ${
          !isShowSearch ? "hidden" : "block"
        }`}
        type="search"
        id="searchIcon"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div
        className={`
      ${!isShowSearch ? "hidden" : "block"}
      absolute top-9 left-8 flex-col bg-white justify-center items-center w-full rounded-b-xl overflow-hidden z-10`}
      >
        {data
          .filter((val) => {
            if (
              searchValue.length > 1 &&
              val.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="border-b-2 border-slate-200 py-2" key={val.id}>
                <Link to={`/product/${val.id}`} className="text-zinc-900 px-2 cursor-pointer">
                  {val.name}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
