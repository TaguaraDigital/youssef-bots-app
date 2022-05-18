import * as FaIcons from "react-icons/fa";
export const headerData = [
  {
    id: 1,
    title: "Documentación",
    path: "./doc",
    cName: "single",
    icon: <FaIcons.FaHome />,
  },
  {
    id: 3,
    title: "Create New",
    path: "./pages",
    cName: "dropdown",
    icon: <FaIcons.FaBriefcase />,
    subMenu: [
      {
        id: 1,
        title: "Page 1",
        path: "./Page1",
        cName: "single",
        icon: <FaIcons.FaAd />,
      },
      {
        id: 2,
        title: "Page 2",
        path: "./Page2",
        cName: "single",
        icon: <FaIcons.FaBeer />,
      },
      {
        id: 3,
        title: "Page 3",
        path: "./Page3",
        cName: "single",
        icon: <FaIcons.FaBusinessTime />,
      },
      {
        id: 4,
        title: "Page 4",
        path: "./Page4",
        cName: "single",
        icon: <FaIcons.FaCamera />,
      },
    ],
  },
  {
    id: 4,
    title: "Mega Menu",
    path: "./services",
    cName: "mega",
    icon: <FaIcons.FaMailBulk />,
    subMenu: [
      {
        id: 1,
        title: "Marketing 1",
        path: "title",
        cName: "dropdown",
        icon: <FaIcons.FaAd />,
        subMenu: [
          {
            id: 1,
            title: "Marketing 1 - 1",
            path: "./marketin11",
            cName: "single",
            icon: <FaIcons.FaAd />,
          },
          {
            id: 2,
            title: "Marketing 1 - 2",
            path: "./marketin12",
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
        title: "Marketing 2",
        path: "./service2",
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
        title: "Services 3",
        path: "./service3",
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
