import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Routes from './routes/Routes'

import './assets/css/main.css'

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={Routes} />
    <Toaster position="top-center" reverseOrder={false}/>
  </>    
)
