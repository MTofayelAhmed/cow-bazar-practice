import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/LayOut/Main';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Login from './components/Login/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>,

    },
    {
      path: '/register',
      element: <Register></Register>,
    }
 
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>
)
