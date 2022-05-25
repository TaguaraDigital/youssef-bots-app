import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
  --whiteClr: #ebfafc;
  --blackClr: #323232;
  --bgLightClr: #b8bac7;
  --bgDarkClr: #38414a;
  --lightClr: #d3d3d3;
  --darkClr: #5e6072;
  --txtMuted: #98a6ad;
  --lightBlue: #cfe9e9;
  --darkBlue: #2142af;

  --ctaInvClr: #5210ac;
  --ctaClr: #eb6909;
    
    /* other variables  */
    --header-height: 100px;
    --nav-width: 68px;
  }

  
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--lightClr);
    color: var(--darkClr);
    font-size: 16px;
    line-height: 1.2;
  }


  .error {
    color: var(--ctaClr);
    font-size: bolder;
  }

  input {
    display: block;
    height: 30px;
    width: 100%;
    margin: 15px 0;
    border: none;
    padding: 10px;
    font-size: 16px;
    box-shadow: 1x 1px 1px rgba(0,0,0,.5)
  }


  button {
    padding: .5rem;
    font-size: 1rem;
    display: block;
    background-color: var(--txtMuted);
    border: none;
    &:hover{
      background-color: var(--ctaClr);
    }
  }
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`;
