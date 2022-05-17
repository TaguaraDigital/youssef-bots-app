import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  --bg: #0c0c0d;
  --bg-secondary: #474747;
  --text-color: #f7f7f7;
  --border: 5px solid #9c9a9a;
  --header-height: 100px;
  background-color: var(--bg);

  ul {
    list-style: none;
    margin: 0;
  }

  a {
    color: var(--text-color);
    text-align: center;
    text-decoration: none;
  }
`;

export const Navbar = styled.nav`
  padding: 0 2rem;
  height: var(--header-height);
`;

export const NavbarMenu = styled.ul`
  height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItem = styled.li`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

export const NavbarLink = styled(Link)`
  padding: 5px 10px;
  margin: 5px;
  outline: none;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  background-color: var(--bg-secondary);
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: var(--header-height);
  z-index: 300;
  width: 100%;
  background-color: var(--bg);
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const DropItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  transition: 0.3s;
  padding: 0.4rem;
  transition: filter 300ms;

  &:hover {
    background-color: var(--bg-secondary);
    filter: brightness(1.3);
  }

  h2 {
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    letter-spacing: 2px;
    line-height: 25px;
    font-size: 16px;
  }

  ul li {
    display: block;
    padding: 10px 0;
    text-align: left;

    a {
      text-transform: capitalize;
      font-size: 22px;
      margin-top: 10x;
      padding: 0 10px;

      &:hover {
        background: var(--text-color);
        color: var(--bg);
      }
    }
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled(Link)`
  width: 70px;
  cursor: pointer;
  background-color: var(--lightClr);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  img {
    display: block;
    max-width: 100%;
  }
`;

export const ToggleMenu = styled.div`
  color: var(--lightClr);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HeaderForm = styled.form`
  display: flex;
  align-items: center;

  span {
    display: none;

    @media screen and (min-width: 990px) {
      display: block;
    }
  }
`;
