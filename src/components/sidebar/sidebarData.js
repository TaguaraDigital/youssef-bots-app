import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dasboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Dashboard 1",
        path: "/dasboard1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Dashboard 2",
        path: "/dasboard2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Apps",
    path: "/app",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Calendar",
        path: "/calendar",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Chat",
        path: "/chat",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Ecommerce",
        path: "/ecpmerce",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
