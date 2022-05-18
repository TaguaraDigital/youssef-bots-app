import styled from "styled-components";
import { Link } from "react-router-dom";

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled(Link)`
  width: 60px;
  cursor: pointer;
  background-color: var(--lightClr);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;

  img {
    display: block;
    max-width: 100%;
  }
`;

export const ToggleMenu = styled.div`
  color: var(--whiteClr);
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HeaderForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--whiteClr);

  span {
    margin-right: 1rem;
    display: none;

    input {
      background: var(--whiteClr);
    }

    @media screen and (min-width: 990px) {
      display: block;
    }
  }
`;
