import { useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './outlet'
import Home from './components/Home';
import About from './components/About'
import ExperienceSection from './components/experience'; 
import Contact from './components/contacts';
import Projects from './components/projects';

const router = createHashRouter([
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
        element: <Projects />
      },
      {
        path: "/contact",
        element: <Contact />
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