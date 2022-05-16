import { NavLink } from "./megaDropdownMenu.Styles";
const DropdownLink = ({ element }) => {
  return (
    <NavLink className="nav__link" to={element.path}>
      {element.title}
      <ul className="drop-menu">
        {element.subMenu.map((link) => {
          return (
            <NavLink key={`${element.id}-${link.id}`} to={link.path}>
              <p>{link.title}</p>
            </NavLink>
          );
        })}
      </ul>
    </NavLink>
  );
};

export default DropdownLink;
