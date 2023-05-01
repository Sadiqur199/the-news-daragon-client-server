import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './layouts/Main';
import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import NewsLayout from './layouts/NewsLayout';
import News from './Pages/News/NEWS/News';
import AuthProvider from './Providers/AuthProvider';
import LoginLayout from './layouts/LoginLayout';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './Route/PrivateRoute';
import TermsCondition from './Pages/Shared/Terms/TermsCondition';

const router = createBrowserRouter([
  {
    path:'/',
    element: <LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to ="/category/0"></Navigate>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'terms',
        element:<TermsCondition></TermsCondition>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
      }
    ]
  },

  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
