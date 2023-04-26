import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layouts/Main';
import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import NewsLayout from './layouts/NewsLayout';
import News from './Pages/News/NEWS/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/category/:id',
        element:<Category></Category>
      }
    ]
  },

  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:'news/:id',
        element:<News></News>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
