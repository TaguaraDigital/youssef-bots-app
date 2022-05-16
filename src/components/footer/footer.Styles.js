import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  padding: 2rem 0;
  background-color: var(--bgDarkClr);
  color: var(--lightClr);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 3.5rem auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  width: 80px;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    max-width: 100%;
  }
`;

export const WebsiteRights = styled.small`
  color: var(--lightClr);
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
`;

export const SocialIconLink = styled.a`
  color: var(--ctaClr);
  font-size: 36px;
  margin-right: 2rem;

  &:hover {
    color: var(--ctaInvClr);
    transform: scale(1.3);
    transition: all 0.5s ease;
  }
`;
