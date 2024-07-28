import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Singlepage from './components/Singlepage';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
var router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/Products",
        element:<Products />
      },
      {
        path:"/About",
        element:<About />
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/Pro/:id",
        element:<Singlepage />
      },
      {
        path:"/Cart",
        element:<Cart />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CartProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
