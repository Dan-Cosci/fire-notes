import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '../App';
import Auth from '../pages/Auth';
import Page404 from '../pages/Page404';


const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {}
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