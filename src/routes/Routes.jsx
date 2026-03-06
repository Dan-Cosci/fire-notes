import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Auth from '../pages/Auth';
import Page404 from '../pages/Page404';
import AppLayout from '../layouts/AppLayout';


const Routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      {path:'home', index:true}
    ]
  },
  {
    path:'auth',
    element: <Auth />,
    children:[
      {}
    ]
  },
  {
    path:'*',
    element:<Page404 />
  }
]);

export default Routes