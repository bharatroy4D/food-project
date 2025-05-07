import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import StoreSingle from './Pages/StoreSingle/StoreSingle.jsx';
import Bakery from './Pages/Bakery/Bakery.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import About from './Pages/About/About.jsx';
import Shop from './Pages/Shop/Shop.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
