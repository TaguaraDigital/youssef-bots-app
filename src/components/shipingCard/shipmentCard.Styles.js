import styled from 'styled-components';
import { cardShadow, hoverEffect } from '../../services/utils/theme';

export const Container = styled.section`
  padding: 0.5rem;
  flex: 1;
  background-color: var(--lightClr);
  border: 1 solid var(--lightClr);
  border-radius: 0.25rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  margin-bottom: 1rem;
  span {
    font-size: 0.9rem;
    color: var(--txtMuted);
  }
`;

export const GridContainer = styled.div`
  padding: 0.5rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .group {
    margin-bottom: 0.5rem;
  }

  .big {
    text-align: right;
    color: red;
    font-size: 1.2rem;
  }
  .right {
    text-align: right;
  }
`;

export const SectionTitle = styled.h1``;
