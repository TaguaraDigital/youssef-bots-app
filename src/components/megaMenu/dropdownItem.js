import { DropItem } from "./megaMenu.Styles";

const DropdownItem = ({ children }) => {
  return <DropItem className="dropdown-item">{children}</DropItem>;
};

export default DropdownItem;
