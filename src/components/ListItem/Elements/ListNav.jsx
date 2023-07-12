const ListNav = ({ children, onclick, active, tab }) => {
  return <li className={`${tab === "false" ? "text-lg text-white" : "tab tab-bordered"} ${active} cursor-pointer`} onClick={onclick}>{children}</li>;
};

export default ListNav;
