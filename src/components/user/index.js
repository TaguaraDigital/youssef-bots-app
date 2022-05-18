import { Avatar, Notification, Profile, UserCard } from "./user.Styles";
import { FaBell } from "react-icons/fa";
import avatar from "../../assets/image/pictures/f2.png";

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
      <Profile>Profile </Profile>
    </UserCard>
  );
};

export default User;
