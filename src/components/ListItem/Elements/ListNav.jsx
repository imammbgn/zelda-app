const ListNav = ({ children, onclick, active }) => {
  return <a className={`tab tab-bordered ${active} cursor-pointer`} onClick={onclick}>{children}</a>;
};

export default ListNav;
