import { useState } from "react";
import { NavbarItem, NavbarLink } from "./megaMenu.Styles";

const MegaItem = ({ link, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarItem
      className="navbar-item"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <NavbarLink to="/" className="navbar-link">
        {link}
      </NavbarLink>
      <div className="menu">{open ? children : null}</div>
    </NavbarItem>
  );
};

export default MegaItem;
