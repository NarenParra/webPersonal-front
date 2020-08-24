//Layout
import LayoutAdmin from "../Layouts/LayoutAdmin";
import LayoutBasic from "../Layouts/LayoutBasic";
//admin pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";
//basic pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
//other
import Error404 from "../pages/Admin/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSingIn,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/Contact",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
