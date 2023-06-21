const ListNav = ({ children, onclick, active, tab }) => {
  return <a className={`${tab === "false" ? "" : "tab tab-bordered"} ${active} cursor-pointer`} onClick={onclick}>{children}</a>;
};

export default ListNav;
