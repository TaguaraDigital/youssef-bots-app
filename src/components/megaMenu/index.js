import { useState, useContext } from "react";

import logo from "../../assets/image/logos/logo.png";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

import { StoreContext } from "../../hooks/contexts/StoreContext";

import {
  Center,
  Header,
  HeaderForm,
  HeaderLogo,
  Left,
  Navbar,
  NavbarMenu,
  Right,
  ToggleMenu,
} from "./megaMenu.Styles";
import User from "../user";
import Setting from "../setting";
import MegaItem from "./megaItem";
import { navElements } from "./navElements"; // Array with menu elements
import DropdownMenu from "./dropdownMenu";

const MegaMenu = ({ page = "landing" }) => {
  const { currentUser, isShow, setIsShow } = useContext(StoreContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setIsShow(!isShow);
  };

  return (
    <Header>
      <Navbar className="navbar">
        <NavbarMenu className="navbar-nav">
          <Left>
            <HeaderLogo to="/">
              <img src={logo} alt="Logo" />
            </HeaderLogo>
            <ToggleMenu onClick={handleShowToggleMenu}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </ToggleMenu>
          </Left>
          <Center>
            <MegaItem link={"Doc"} />
            <MegaItem link={"Create New"}>
              <DropdownMenu />
            </MegaItem>
            <MegaItem link={"Mega Menu"}></MegaItem>
          </Center>
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
        </NavbarMenu>
      </Navbar>
    </Header>
  );
};

export default MegaMenu;
