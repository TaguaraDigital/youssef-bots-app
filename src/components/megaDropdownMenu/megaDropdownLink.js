import { NavLink } from "./megaDropdownMenu.Styles";

const MegaDropdownLink = ({ element }) => {
  return (
    <NavLink className="nav__link" to={element.path}>
      {element.title}
      <div className="mega-box">
        <div className="content">
          {element.subMenu.map((item) => {
            return (
              <div className="row">
                <div className="menu-title">{item.title}</div>
                <ul className="mega-menu">
                  {item.subMenu.map((i) => {
                    return (
                      <NavLink className="nav__link" to={element.path}>
                        {element.title}, {item.title},{i.title}
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </NavLink>
  );
};

export default MegaDropdownLink;
