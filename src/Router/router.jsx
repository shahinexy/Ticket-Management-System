import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import UserData from "../Pages/UserDatas/UserData";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/about-us',
            element: <About></About>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/userdata:id',
          element: <UserData></UserData>,
          loader: ({params}) => fetch(`http://localhost:3000/alluser/${params.id}`)
        }
      ]
    },
  ]);

export default router;