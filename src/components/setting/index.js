import { SettingMenu } from "./setting.Styles";
import { FaRegSun } from "react-icons/fa";

const User = () => {
  const handleClick = () => {
    alert("Sorry, this is not ready");
  };

  return (
    <SettingMenu>
      <FaRegSun onClick={handleClick} />
    </SettingMenu>
  );
};

export default User;
