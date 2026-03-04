import React from 'react'
import { createBrowserRouter } from 'react-router-dom'


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
    element:'auth',
    children:[
      {}
    ]
  },
  {
    path:'*',
    element:'404 not found'
  }
]);

export default Routes