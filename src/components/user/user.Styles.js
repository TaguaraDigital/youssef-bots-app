import styled from "styled-components";

export const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  color: var(--whiteClr);
`;

export const Notification = styled.div`
  position: relative;
  font-size: 20px;
  color: var(--whiteClr);
  margin-right: 1rem;

  span {
    background-color: var(--lightClr);
    width: 12px;
    height: 12px;
    position: absolute;
    top: 35%;
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

export const Profile = styled.div``;
