import styled from "styled-components";

export const DocSection = styled.section`
  min-height: 100vh;
  padding: var(--header-height);
  display: flex;
  flex-direction: column;
  justify-conten: center;
  align-items: center;
  p {
    line-height: 1.2;
    margin-bottom: 1rem;
    max-width: 600px;
  }
`;
export const DocTitle = styled.h1`
  text-align: center;
  margin: 5rem 0;
`;
