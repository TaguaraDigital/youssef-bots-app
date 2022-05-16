import styled from "styled-components";

export const SidebarMenu = styled.aside`
  padding-top: var(--header-height);
  background-color: var(--bgDarkClr);
  top: 0;
  left: ${({ isShow }) => (isShow ? 0 : "-30%")};
  
  min-height: 100vh;
  width: var(--nav-width);
  
  transition: 0.5s;
  
  @media screen and (min-width: 768px) {
    left: 0;
    padding: 1rem 0 0 0;
    
    width: ${({ isShow }) =>
      isShow ? "calc(var(--nav-width) + 156px)" : "var(--nav-width)"};

    }

    .space-toggle {
      padding-left: calc(var(--nav-width) + 188px);
    }
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: ;
  overflow: hidden;
  height: 100%;

  .nav-logo,
  .nav-link {
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 2rem;
    padding: 0.5rem 0 0.5rem 1.5rem;
  }

  .nav-logo {
    margin-bottom: 2rem;
    color: var(--whiteClr);
  }

  .nav-logo-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-logo-name {
    font-weight: bold;
  }

  .nav-link {
    color: var(--whiteClr);
    margin-bottom: 1.5rem;
    transition: 0.5s;
  }

  .nav-link:hover {
    color: var(--whiteClr);
    background-color: rgba(0, 0, 0, 0.1);
  }

  .active {
    position: relative;
    color: var(--whiteClr);
    background-color: rgba(0, 0, 0, 0.1);
  }

  .active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 35px;
    width: 3px;
    background-color: var(--whiteClr);
    transition: 0.5s;
  }

  @media screen and (min-width: 768px) {
    left: 0;
    padding: 1rem 0 0 0;
  }
`;
