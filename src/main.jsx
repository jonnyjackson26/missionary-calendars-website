import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { About } from './pages/About/About';
import { Buy } from './pages/Buy/Buy';
import Home from './pages/Home/Home';
import Templates from './pages/Templates/Templates';
import UploadPhotos from './pages/UploadPhotos/UploadPhotos';
import Options from './pages/Options/Options';


const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/templates",
    element: <Templates />,
  },
  {
    path: "/uploadPhotos",
    element: <UploadPhotos />,
  },
  {
    path: "/options",
    element: <Options />,
  },
])

export const Context = React.createContext();

function Main() {
  return (
    <Context.Provider>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)