import * as FaIcons from 'react-icons/fa';
export const headerData = [
  {
    id: 1,
    title: 'Doc',
    path: './doc',
    cName: 'single',
    icon: <FaIcons.FaHome />,
  },
  {
    id: 3,
    title: 'Dashboard',
    path: './dashbard',
    cName: 'dropdown',
    icon: <FaIcons.FaBriefcase />,
    subMenu: [
      {
        id: 1,
        title: 'Dashboard',
        path: './dashboard',
        cName: 'single',
        icon: <FaIcons.FaAd />,
      },
      {
        id: 2,
        title: 'Dashboard 2',
        path: './dashboard',
        cName: 'single',
        icon: <FaIcons.FaBeer />,
      },
      {
        id: 3,
        title: 'Dashboard 3',
        path: './dashboard',
        cName: 'single',
        icon: <FaIcons.FaBusinessTime />,
      },
    ],
  },
  {
    id: 4,
    title: 'Services',
    path: './services',
    cName: 'mega',
    icon: <FaIcons.FaMailBulk />,
    subMenu: [
      {
        id: 1,
        title: 'Services  Group 1',
        path: 'title',
        cName: 'dropdown',
        icon: <FaIcons.FaAd />,
        subMenu: [
          {
            id: 1,
            title: 'Service 1 - Op 1',
            path: './marketin11',
            cName: 'single',
            icon: <FaIcons.FaAd />,
          },
          {
            id: 2,
            title: 'Service 1 - Op 2',
            path: './marketin12',
            cName: 'single',
            icon: <FaIcons.FaBeer />,
          },
          {
            id: 3,
            title: 'Service 1 - Op 3',
            path: './',
            cName: 'single',
            icon: <FaIcons.FaBusinessTime />,
          },
        ],
      },
      {
        id: 2,
        title: 'Services Group 2',
        path: './service2',
        cName: 'dropdown',
        icon: <FaIcons.FaBeer />,
        subMenu: [
          {
            id: 1,
            title: 'Service 2 - Op 1',
            path: './',
            cName: 'single',
            icon: <FaIcons.FaAd />,
          },
          {
            id: 2,
            title: 'Service 2 - Op 2',
            path: './',
            cName: 'single',
            icon: <FaIcons.FaBeer />,
          },
          {
            id: 3,
            title: 'Service 2 - Op 3',
            path: './',
            cName: 'single',
            icon: <FaIcons.FaBusinessTime />,
          },
          {
            id: 4,
            title: 'Service 2 - Op 4',
            path: './',
            cName: 'single',
            icon: <FaIcons.FaBusinessTime />,
          },
        ],
      },
      {
        id: 3,
        title: 'Services Group 3',
        path: './service3',
        cName: 'dropdown',
        icon: <FaIcons.FaBusinessTime />,
        subMenu: [
          {
            id: 1,
            title: 'Service 3 - Op 1',
            path: './',
            cName: 'single',
            icon: <FaIcons.FaAd />,
          },
          {
            id: 2,
            title: 'Service 3 - Op 2',
            path: './',
            cName: 'single',
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
    title: 'Profile',
    path: './',
    cName: 'dropdown',
    icon: <FaIcons.FaUserAlt />,
    subMenu: [
      {
        id: 1,
        title: 'My Account',
        path: './',
        cName: 'single',
        icon: <FaIcons.FaUser />,
      },
      {
        id: 2,
        title: 'Logout',
        path: './',
        cName: 'single',
        icon: <FaIcons.FaSignOutAlt />,
      },
    ],
  },
];
