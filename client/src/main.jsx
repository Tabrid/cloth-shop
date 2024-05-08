import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Routes'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthContextProvider>
     <Toaster/>
     <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
  </React.StrictMode>,
)
