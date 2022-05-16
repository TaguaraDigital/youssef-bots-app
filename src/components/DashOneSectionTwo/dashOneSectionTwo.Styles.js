import styled from "styled-components";

export const Row = styled.div`
  padding: 1rem;

  display: grid;
  margin-bottom: 2rem;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const Chart1 = styled.div`
  position: relative;
  display: flex;
  word-wrap: break-word;
  background-color: var(--lightClr);
  border: 0 solid var(--darkClr);
  border-radius: 0.25rem;
`;

export const Chart2 = styled.div`
  position: relative;
  display: flex;
  word-wrap: break-word;
  background-color: var(--lightClr);
  border: 0 solid var(--darkClr);
  border-radius: 0.25rem;
`;
