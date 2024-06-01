import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element : <App />,
      children : [
        {
          index : true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,

        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'contact',
          element: <Contact />,
        }

      ],
      
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

export default router