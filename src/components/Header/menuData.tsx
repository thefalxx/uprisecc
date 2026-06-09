import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Pricing",
  //   path: "/",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    newTab: false,
    // submenu: [
    //   {
    //     id: 61,
    //     title: "For Clients",
    //     path: "/client",
    //     newTab: false,
    //   },
    //   {
    //     id: 62,
    //     title: "For Workers",
    //     path: "/workers",
    //     newTab: false,
    //   }
    // ],
  },
  // {
  //   id: 5,
  //   title: "What We Offer",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "For Clients",
  //       path: "/client",
  //       newTab: false,
  //     },
  //     {
  //       id: 62,
  //       title: "For Workers",
  //       path: "/workers",
  //       newTab: false,
  //     }
  //   ],
  // },

  {
  id: 5,
  title: "What We Offer",
  newTab: false,
  submenu: [
    {
      id: 61,
      title: "For Clients",
      path: "/client",
      newTab: false,
    },
    {
      id: 62,
      title: "For Workers",
      path: "/workers",
      newTab: false,
      submenu: [
        {
          id: 621,
          title: "View Page",
          path: "/workers",
          newTab: false,
        },
        {
          id: 622,
          title: "Login to Uprisecc App",
          path: "https://uprisecc-app.com.au/login",
          newTab: true,
        },
      ],
    },
  ],
},
];
export default menuData;
