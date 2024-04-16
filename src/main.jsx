/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Errorpage from './components/Errorpage/Errorpage';
import AboutUs from './components/About Us/AboutUs';
// import Contact from './components/Contact/Contact';
import UpdateProfile from './components/Update Profile/UpdateProfile';
import Login from './components/Login/Login';
import Viewdetails from './components/ViewDetails/Viewdetails';
import Register from './components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './components/Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        
      },
      {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path: '/update',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute> 
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'viewdetails',
        element: <Viewdetails></Viewdetails>,
        loader: () => fetch('Residential.json')
      },
      {
        path: 'register',
        element: <Register></Register>
      }
     
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
