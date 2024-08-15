import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Mainlayout/Home';
import LogIn from './Mainlayout/Lopgin';
import Register from './Mainlayout/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element:<LogIn></LogIn> ,
  },
  {
    path:'/home',
    element: <Home></Home>,
  },
  {
    path:"/signUp",
    element:<Register></Register>
  }
]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
