import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const DisplayBtn = ({ onclick }) => {
  return (
    <div className="flex gap-5">
      <div onClick={() => onclick("cart")} className="flex w-10 rounded-full bg-zinc-900 bg-opacity-60 lg:hover:bg-opacity-100 cursor-pointer duration-500 lg:hover:scale-125">
        <ShoppingCartIcon className="m-auto" style={{ color: "white" }} fontSize="small" />
      </div>
      <div onClick={() => onclick("fav")} className="flex w-10 h-10 rounded-full bg-zinc-900 bg-opacity-60 lg:hover:bg-opacity-100 cursor-pointer duration-500 lg:hover:scale-125">
        <FavoriteRoundedIcon className="m-auto" style={{ color: "white" }} fontSize="small" />
      </div>
    </div>
  );
};

export default DisplayBtn;
