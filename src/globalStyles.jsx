import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --whiteClr: #afddee;
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
    --header-height: 80px;
    --nav-width: 68px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
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

  .title-center{
    text-align: center;
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


  input[type=checkbox] {
    height: 20px;
    width: 100%;
    padding: 2px;
    font-size: 1rem;
    box-shadow: none;
  }

 

.pago-container {
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.tarjeta {
  padding : 2rem;
  font-size: 2rem;
  background-color: #d9f0fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.container-tarjeta {
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.datos-tarjeta {
  margin-top: 2rem;
  width: 100%;
  padding : 2rem;
  font-size: 2rem;
  background-color: yellow;
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

.header__nav {
  background-color: var(--first-clr);
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: var(--white-clr);
  z-index: 200;


  .wrapper {
    flex:1;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
  }

  .nav__links {
    display: inline-flex;
  }

  a {
    padding: 9px 15px;
    border-radius: 5px;
    transition: 0.5s linear;

    &:hover {
      background-color: #4a4b4c;
    }
  }

  .drop-menu {
    background-color: #242526;
    position: absolute;
    top: 3rem;
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
      .mega-box {
        opacity: 1;
        visibility: visible;
        transition: 0.5s linear;
      }
    }
  }

  .mega-box {
    position: absolute;
    background-color: #242526;
    width: 100%;
    left: 0;
    top: 3rem;
    line-height: 1.5rem;
    opacity: 0;
    visibility: hidden;
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    width: 100%;
  }

  .menu-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .row {
    width: calc(25% - 2rem);
    img {
      max-width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}


`;

// export const Button = styled.button`

//   background-color: ${({primary}) => (primary ? 'var(--ctaClr)' : 'var(--ctaInvClr)')};
//   color: var(--lightClr);
//   white-space: nowrap;
//   padding: ${({big}) => (big ? '12px 64px' : '10px 20px' )};
//   cursor: pointer;

//   margin-bottom: 10rem;

//   border: none;
//   outline: none;

//   &:hover {
//     background-color: ${({primary}) => (primary ? 'var(--ctaInvClr)' : 'var(--ctaClr)')};
//     transition: all .5s ease;
//   }
// `;
