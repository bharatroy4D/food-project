import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import StoreSingle from "../Pages/StoreSingle/StoreSingle";
import Bakery from "../Pages/Bakery/Bakery";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Card from "../Pages/Home/Card/Card";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/storeSingle',
        element:<StoreSingle/>
      },
      {
        path:'/bakery',
        element:<Bakery/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/card/:id',
        element:<Card/>
      }
    ]
    }
])