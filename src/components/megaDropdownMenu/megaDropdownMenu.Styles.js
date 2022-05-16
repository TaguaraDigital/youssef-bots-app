import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: var(--bgDarkClr);
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: var(--whiteClr);
  z-index: 200;

  .wrapper {
    flex: 1;
    display: none;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1200px) {
      display: flex;
    }
  }
  
  .nav__links {
    position: relative;
    display: inline-flex;
    flex: 1;

  }

  a {
    padding: 9px 15px;
    display: flex;
    border-radius: 5px;
    transition: 0.5s linear;

    &:hover {
      background-color: var(--txtMuted);
    }
  }

  .drop-menu {
    position: absolute;
    background-color: var(--bgDarkClr);
    top: 2.5rem;
    line-height: 1.5rem;
    opacity: 0;
    visibility: hidden;

    .nav__link {
      a {
        display: block;
        padding: 15px 0 0 15px;
        &:hover {
          background-color: #4a4b4c;
        }
      }
    }
  }

  .nav__link {
    &:hover {
      .drop-menu {
        opacity: 1;
        visibility: visible;
        transition: 0.5s linear;
      }
      .mega-box {
        opacity: 1;
        visibility: visible;
        transition: 0.5s linear;
      }
    }
  }

  .mega-box {
    position: absolute;
    background-color: var(--bgDarkClr);
    left: 0;
    top: 2.5rem
    line-height: 1.5rem;
    opacity: 0;
    visibility: hidden;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    width: 100%;
  }

  .menu-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .row {
    width: calc(25% - 2rem);
    img {
      max-width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
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

export const NavItems = styled.ul`
  list-style: none;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const NavLinks = styled.li`
  padding: 0 0.5rem;
  text-align: center;

  &:not(:first-of-type) {
    margin-left: 2rem;
    margin-top: 0;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;

export const NavLink = styled(Link)`
  // position: relative;
  color: var(--lightClr);
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: var(--ctaClr);
    width: 100%;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: var(--ctaClr);
      bottom: -2px;
      left: 0;
    }
  }
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
