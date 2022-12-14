import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import Bongorent from "../Components/Projects/Bongorent/Bongorent";
import Skillbd from "../Components/Projects/Skillbd/Skillbd";
import UsedPhone from "../Components/Projects/UsedPhone/UsedPhone";



export const router = createBrowserRouter([
     {
          path:'/',
          element: <Home> </Home>
     },
     {
          path:'/usedphone',
          element: <UsedPhone> </UsedPhone>
     },
     {
          path:'/skillbd',
          element: <Skillbd></Skillbd>
     },
     {
          path:'/bongorent',
          element: <Bongorent></Bongorent>
     },{
          path:'/blog',
          element: <Blog> </Blog>
     }
])