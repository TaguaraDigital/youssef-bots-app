import { headerData as data } from './data';
import { Link } from 'react-router-dom';

import logo from '../../assets/image/logos/logo.png';
import { FaSearch } from 'react-icons/fa';

import styles from './header.module.scss';
import User from '../user';
import Setting from '../setting';

import { Center, HeaderForm, HeaderLogo, Left, Right } from './header.Styles';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Left>
          <HeaderLogo to="/">
            <img src={logo} alt="Logo" />
          </HeaderLogo>
        </Left>
        <Center>
          <ul className={styles.navLinks}>
            {data.map((link) => {
              return link.cName === 'single' ? (
                // Single Link
                <li key={link.id}>
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ) : // Dropdown Link

              link.cName === 'dropdown' ? (
                <li key={link.id} className={styles.subMenu}>
                  <Link to={link.path}>{link.title}</Link>

                  <ul className={styles.dropdownMenu}>
                    {link.subMenu.map((link) => {
                      return (
                        <li key={link.id}>
                          <Link to={link.path}>{link.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                // Mega Menu Link
                <li key={link.id} className={styles.subMenu}>
                  <Link to={link.path}>{link.title}</Link>
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
                                    <Link to={i.path}>{i.title}</Link>
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
      </div>
    </nav>
  );
};

export default Header;
