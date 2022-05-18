import { headerData as data } from "./data";
import { useState, useContext } from "react";

import logo from "../../assets/image/logos/logo.png";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

import { StoreContext } from "../../hooks/contexts/StoreContext";

import styles from "./header.module.scss";
import User from "../user";
import Setting from "../setting";

import {
  HeaderForm,
  HeaderLogo,
  Left,
  Right,
  ToggleMenu,
} from "./header.Styles";

const Header = () => {
  const { isShow, setIsShow } = useContext(StoreContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setIsShow(!isShow);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Left>
          <HeaderLogo to="/">
            <img src={logo} alt="Logo" />
          </HeaderLogo>
          <ToggleMenu onClick={handleShowToggleMenu}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </ToggleMenu>
        </Left>
        <ul className={styles.navLinks}>
          {data.map((link) => {
            return link.cName === "single" ? (
              <li key={link.id}>
                <a href={link.path}>{link.title}</a>
              </li>
            ) : link.cName === "dropdown" ? (
              <li key={link.id} className={styles.subMenu}>
                <a href={link.path}>{link.title}</a>
                <ul className={styles.dropdownMenu}>
                  {link.subMenu.map((link) => {
                    return (
                      <li key={link.id}>
                        <a href={link.path}>{link.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={link.id} className={styles.subMenu}>
                <a href={link.path}>{link.title}</a>
                <div className={styles.megaMenu}>
                  <div className={styles.content}>
                    {link.subMenu.map((item) => {
                      return (
                        <div key={item.id} className={styles.row}>
                          <p className={styles.title}>{item.title}</p>
                          <ul className={styles.megaMenuLinks}>
                            {item.subMenu?.map((i) => {
                              return (
                                <li key={i.id}>
                                  <a href={i.path}>{i.title}</a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
      </div>
    </nav>
  );
};

export default Header;
