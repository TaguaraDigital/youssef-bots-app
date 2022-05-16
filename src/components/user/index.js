import { Avatar, Notification, Profile, UserCard } from "./user.Styles";
import { FaBell } from "react-icons/fa";
import avatar from "../../assets/image/pictures/f2.png";
import { profileElements } from "../megaDropdownMenu/navElements"; // Array with menu elements
import DropdownLink from "../megaDropdownMenu/dropdownLink";
import {
  NavItems,
  NavLinks,
} from "../megaDropdownMenu/megaDropdownMenu.Styles";

const User = () => {
  return (
    <UserCard>
      <Notification>
        <FaBell />
        <span> 5</span>
      </Notification>
      <Avatar>
        <img src={avatar} alt="avatar" />
      </Avatar>
      <Profile>
        <div className="wrapper">
          <NavItems className="nav__links">
            <NavLinks>
              <DropdownLink element={profileElements[0]} />
            </NavLinks>
          </NavItems>
        </div>
      </Profile>
    </UserCard>
  );
};

export default User;
