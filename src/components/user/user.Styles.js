import styled from "styled-components";

export const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Notification = styled.div`
  position: relative;
  font-size: 20px;
  color: var(--darkClr);
  margin-right: 1rem;
  span {
    width: 12px;
    height: 12px;
    background: var(--whiteClr);
    position: absolute;
    top: -5px;
    left: 10px;
    font-size: 10px;
    border-radius: 50%;
    color: var(--darkClr);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  font-size: 10px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;

  img {
    display: block;
    max-width: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
  }
`;
