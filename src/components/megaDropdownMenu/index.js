import { useState, useContext } from "react";

import logo from "../../assets/image/logos/logo.png";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

import { StoreContext } from "../../hooks/contexts/StoreContext";

import {
  Header,
  HeaderForm,
  HeaderLogo,
  Left,
  NavItems,
  NavLink,
  NavLinks,
  Right,
  ToggleMenu,
} from "./megaDropdownMenu.Styles";
import User from "../user";
import Setting from "../setting";
import { navElements } from "./navElements"; // Array with menu elements
import DropdownLink from "./dropdownLink";
import MegaDropdownLink from "./megaDropdownLink";

const MegaDropdownMenu = ({ page = "landing" }) => {
  const { currentUser, isShow, setIsShow } = useContext(StoreContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setIsShow(!isShow);
  };

  return (
    <Header>
      <Left>
        <HeaderLogo to="/">
          <img src={logo} alt="Logo" />
        </HeaderLogo>
        <ToggleMenu onClick={handleShowToggleMenu}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </ToggleMenu>
      </Left>

      <div className="wrapper">
        <NavItems className="nav__links" onClick={handleShowToggleMenu}>
          {navElements.map((element) => {
            return (
              <NavLinks key={element.id}>
                {element.cName === "single" && (
                  <NavLink to={element.path} onClick={handleShowToggleMenu}>
                    {element.title}
                  </NavLink>
                )}
                {element.cName === "dropdown" && (
                  <DropdownLink element={element} />
                )}
                {element.cName === "megaDropdown" && (
                  <MegaDropdownLink element={element} />
                )}
              </NavLinks>
            );
          })}
        </NavItems>
      </div>

      <Right>
        <HeaderForm>
          <span>
            <input type="text" placeholder="Search" />
          </span>
          <FaSearch />
        </HeaderForm>
        <User />
        <Setting />
      </Right>
    </Header>
  );
};

export default MegaDropdownMenu;
