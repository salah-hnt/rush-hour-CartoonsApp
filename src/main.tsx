import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './pages/Home.tsx'
import { Contact } from './pages/Contact.tsx'
import { CartoonsDetails } from './pages/CartoonsDetails.tsx'





const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cartoons/:id",
        element: <CartoonsDetails />,
      },
  
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
