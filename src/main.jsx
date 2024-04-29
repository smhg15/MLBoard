import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './views/Dashboard.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    // errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
