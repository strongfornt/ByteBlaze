import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';

import {
 
  RouterProvider
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import Spinner from './Components/Spinner/Spinner';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} fallbackElement={<Spinner/>} />
   <Toaster/>
  </React.StrictMode>,
)
