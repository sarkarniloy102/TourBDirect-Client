import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home/Home";
import LogIn from "../LogIn/LogIn";
import Register from "../Registration/Register";
import AllPackages from "../Page/AllPackages/AllPackages/AllPackages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/signup",
          element:<Register></Register>
        },
        {
          path:"/allpackages",
          element: <AllPackages></AllPackages>
        }
      ]
    },
  ]);
export default router;
