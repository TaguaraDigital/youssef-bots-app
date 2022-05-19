import {
  FaBusinessTime,
  FaHome,
  FaLock,
  FaMailBulk,
  FaMoneyBill,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiOutlineDashboard, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

export const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
    subRoutes: [
      {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
      },
      {
        path: "/dasboard2",
        name: "Dashboard 2",
        icon: <FaBusinessTime />,
      },
      {
        path: "/dasboard3",
        name: "Dashboard 3",
        icon: <FaMailBulk />,
      },
    ],
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/",
    name: "Logout",
    icon: <FaSignOutAlt />,
  },
];
