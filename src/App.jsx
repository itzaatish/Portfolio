import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './outlet'
import Home from './components/Home';
import About from './components/About'
import ExperienceSection from './components/experience'; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/experince",
        element: <ExperienceSection />
      },
      {
        path: "/projects",
        element: <div>Projects</div>
      },
      {
        path: "/contact",
        element: <div>Contact</div>
      }
      ]
  }
])

function App() {

  return (
    <div className='bg-light'>
      <RouterProvider router ={router} />
    </div>
  )
}

export default App
