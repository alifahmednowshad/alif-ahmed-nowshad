import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Page404 from "../pages/Page404";
import Project from "../pages/Project/Project";
import Contact from "../pages/Contact/Contact";
import Skill from "../pages/Skill/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
