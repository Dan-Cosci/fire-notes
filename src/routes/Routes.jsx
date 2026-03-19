import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import CreateNote from '../pages/CreateNote';
import EditNote from '../pages/EditNote';
import Logout from '../pages/Logout';
import Page404 from '../pages/Page404';

import AppLayout from '../layouts/AppLayout';


const Routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      { path:'/', index:true, element: <Dashboard/> },
      { path:'/create', element: <CreateNote /> },
      { path:'/edit/:id', element: <EditNote /> }
    ]
  },
  {
    path:'auth',
    element: <Auth />,
  },
  {
    path:'/logout',
    element:<Logout/>
  },
  {
    path:'*',
    element:<Page404 />
  }
]);

export default Routes
