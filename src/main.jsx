import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route';
import './index.css'
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div >
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </div>
   
  </React.StrictMode>,
)
