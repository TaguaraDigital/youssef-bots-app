/**
 * https://github.com/mtajammulzia/navbar-dropdown/blob/main/components/NavItems.js
 *  */
import * as FaIcons from "react-icons/fa";
export const navElements = [
  {
    id: 1,
    title: "Doc",
    path: "./doc",
    cName: "single",
    icon: <FaIcons.FaHome />,
  },
  {
    id: 2,
    title: "Create New",
    path: "./",
    cName: "dropdown",
    icon: <FaIcons.FaBriefcase />,
    subMenu: [
      {
        id: 1,
        title: "Marketing",
        path: "./",
        cName: "single",
        icon: <FaIcons.FaAd />,
      },
      {
        id: 2,
        title: "Consulting",
        path: "./",
        cName: "single",
        icon: <FaIcons.FaBeer />,
      },
      {
        id: 3,
        title: "Design",
        path: "./",
        cName: "single",
        icon: <FaIcons.FaBusinessTime />,
      },
      {
        id: 4,
        title: "Development",
        path: "./",
        cName: "single",
        icon: <FaIcons.FaCamera />,
      },
    ],
  },
  {
    id: 3,
    title: "Mega Menu",
    path: "./",
    cName: "megaDropdown",
    icon: <FaIcons.FaMailBulk />,
    subMenu: [
      {
        id: 1,
        title: "Marketing",
        path: "./",
        cName: "dropdown",
        icon: <FaIcons.FaAd />,
        subMenu: [
          {
            id: 1,
            title: "Marketing 1 - 1",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaAd />,
          },
          {
            id: 2,
            title: "Marketing 1 - 2",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaBeer />,
          },
          {
            id: 3,
            title: "Marketing 1 - 3",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaBusinessTime />,
          },
        ],
      },
      {
        id: 2,
        title: "Consulting 2",
        path: "./",
        cName: "dropdown",
        icon: <FaIcons.FaBeer />,
        subMenu: [
          {
            id: 1,
            title: "Marketing 2 - 1",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaAd />,
          },
          {
            id: 2,
            title: "Marketing 2 - 2",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaBeer />,
          },
          {
            id: 3,
            title: "Marketing 2 - 3",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaBusinessTime />,
          },
        ],
      },
      {
        id: 3,
        title: "Design",
        path: "./",
        cName: "dropdown",
        icon: <FaIcons.FaBusinessTime />,
        subMenu: [
          {
            id: 1,
            title: "Marketing 3 - 1",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaAd />,
          },
          {
            id: 2,
            title: "Marketing 3 - 1",
            path: "./",
            cName: "single",
            icon: <FaIcons.FaBeer />,
          },
        ],
      },
    ],
  },
];

export const profileElements = [
  {
    id: 1,
    title: "Profile",
    path: "./",
    cName: "dropdown",
    icon: <FaIcons.FaUserAlt />,
    subMenu: [
      {
        id: 1,
        title: "My Account",
        path: "./",
        cName: "single",
        icon: <FaIcons.FaUser />,
      },
      {
        id: 2,
        title: "Logout",
        path: "./",
        cName: "single",
        icon: <FaIcons.FaSignOutAlt />,
      },
    ],
  },
];
