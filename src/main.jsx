import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import { HelmetProvider } from 'react-helmet-async';
import FAQs from './components/FAQs/FAQs';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';
import { ShoppingProvider } from './context/ShoppingContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "faqs",
        element: <FAQs></FAQs>
      },
      {
        path: "gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ShoppingProvider>
  </StrictMode>,
)
