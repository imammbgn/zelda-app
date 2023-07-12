import ListNav from "./ListNav";

const OrderList = ({ onclick, active }) => {

  return (
    <div className="hidden lg:block">
      <ul className="flex self-start flex-row gap-7">
        <ListNav active={active !== "" ? "" : "tab-active font-semibold"} onclick={() => onclick("")}>All Products</ListNav>
        <ListNav active={active !== "accessories" ? "" : "tab-active font-semibold"} onclick={() => onclick("accessories")}>Accesories</ListNav>
        <ListNav active={active !== "bag" ? "" : "tab-active font-semibold"} onclick={() => onclick("bag")}>Bags</ListNav>
        <ListNav active={active !== "watch" ? "" : "tab-active font-semibold"} onclick={() => onclick("watch")}>Watch</ListNav>
        <ListNav active={active !== "clothing" ? "" : "tab-active font-semibold"} onclick={() => onclick("clothing")}>Clothing</ListNav>
        <ListNav active={active !== "dress" ? "" : "tab-active font-semibold"} onclick={() => onclick("dress")}>Dress Shirts</ListNav>
      </ul>
    </div>
  );
};

export default OrderList;
