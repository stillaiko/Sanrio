import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import Form from './componentes/form/Form'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header />
    <Main />
    <Footer />
    </>,
  },
  {
    path: "/contato",
    element:<>
    <Header />
    <Form />
    <Footer/>
    </> ,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
