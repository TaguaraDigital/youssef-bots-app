import styled from "styled-components";
import { cardShadow, hoverEffect } from "../../services/utils/theme";

export const Row = styled.div`
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  word-wrap: break-word;
  background-color: var(--lightClr);
  border: 1 solid var(--lightClr);
  border-radius: 0.25rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

export const CardAvatar = styled.div`
  flex: 1 1 auto;
  padding: 1.5rem 1.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    height: 4.5rem;
    width: 4.5rem;
    border: 1px solid var(--lightClr);
    background-color: rgba(102, 88, 221, 0.25);
    border-radius: 50%;
  }
`;
export const CardInfo = styled.div`
  flex: 1 1 auto;
  padding: 1.5rem 1.5rem;
  text-align: right;

  .text {
    color: var(--txtMuted);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
