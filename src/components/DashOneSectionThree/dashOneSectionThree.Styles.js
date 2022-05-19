import styled from "styled-components";
import { cardShadow, hoverEffect } from "../../services/utils/theme";

export const Row = styled.div`
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Chart1 = styled.div`
  position: relative;
  display: flex;
  word-wrap: break-word;
  background-color: var(--lightClr);
  border: 0 solid var(--darkClr);
  border-radius: 0.25rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

export const Chart2 = styled.div`
  position: relative;
  display: flex;
  word-wrap: break-word;
  background-color: var(--lightClr);
  border: 0 solid var(--darkClr);
  border-radius: 0.25rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;
