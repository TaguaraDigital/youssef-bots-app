import DropdownItem from "./dropdownItem";

import { Dropdown } from "./megaMenu.Styles";

const DropdownMenu = () => {
  return (
    <Dropdown className="dropdown">
      <DropdownItem>
        <h2>Que paginas quieres Visitar</h2>
        <p>
          {" "}
          Haz click en lo enlaces de la derecha para visitar las siguientes
        </p>
      </DropdownItem>
      <DropdownItem>
        <h2>Tagura Digital</h2>
        <ul>
          <li>
            <a
              href="https://tg-portfolio-react.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Landing Page
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/TaguaraDigital"
              target="_blank"
              rel="noreferrer"
            >
              Twiter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/taguaradigital"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </DropdownItem>
      <DropdownItem>
        <h2>Youssef</h2>
        <ul>
          <li>
            <a
              href="https://youssefsabbagh.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/youssef-sabbagh/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownMenu;
