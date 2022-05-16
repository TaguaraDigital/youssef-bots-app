import logo from "../../assets/image/logos/logo.png";

import { IconContext } from "react-icons/lib";

import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import {
  FooterContainer,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./footer.Styles";

const Footer = ({ id = "footer" }) => {
  return (
    <FooterContainer id={id}>
      <SocialMediaWrap>
        <IconContext.Provider value={{ color: "var(--ctaClr)" }}>
          <SocialLogo to="/">
            <img src={logo} alt="Logo" />
          </SocialLogo>
        </IconContext.Provider>

        <WebsiteRights>
          © 2022 - Desarrollado por Taguara Digital. Todos los derechos
          reservados
        </WebsiteRights>

        <SocialIcons>
          <SocialIconLink
            href="https://www.facebook.com/SaintdeVenezuela/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com/saintve"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.instagram.com/saintve/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </FooterContainer>
  );
};

export default Footer;
