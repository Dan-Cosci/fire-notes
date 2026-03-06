import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Auth from '../pages/Auth';

import Page404 from '../pages/Page404';

import AppLayout from '../layouts/AppLayout';
import Dashboard from '../components/appComponents/Dashboard'
import CreateNote from '../components/appComponents/CreateNote'
import PageView from '../components/appComponents/PageView'


const Routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      { path:'/home', index:true, element: <Dashboard/> },
      { path:'/create', element: <CreateNote /> },
      { path:'/edit/:id', element: <PageView /> }
    ]
  },
  {
    path:'auth',
    element: <Auth />,
  },
  {
    path:'*',
    element:<Page404 />
  }
]);

export default Routes