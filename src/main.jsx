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
import AuthProvider from './AuthProvider/AuthProvider';
import Private from './private/Private';

import {


  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element:<LogIn></LogIn> ,
  },
  {
    path:'/home',
    element: <Private><Home></Home></Private>,
  },
  {
    path:"/signUp",
    element:<Register></Register>
  }
]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    
    </AuthProvider>
  </StrictMode>,
)
