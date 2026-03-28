import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { urls } from './urls'
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import NoteEditor from '../pages/NoteEditor';
import Logout from '../pages/Logout';
import Page404 from '../pages/Page404';

import AppLayout from '../layouts/AppLayout';

export const Routes = createBrowserRouter([
  {
    path: urls.home,
    element: <AppLayout />,
    children:[
      { path: urls.home, index:true, element: <Dashboard/> },
      { path: urls.create, element: <NoteEditor /> },
      { path: urls.edit, element: <NoteEditor /> }
    ]
  },
  {
    path: urls.auth,
    element: <Auth />,
  },
  {
    path: urls.logout,
    element: <Logout/>
  },
  {
    path: urls.page404,
    element: <Page404 />
  }
]);
