import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Details from './components/Details/Details'
import appliedJobsLoader from './utilities/appliedJobLoader'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: appliedJobsLoader
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: ({params}) => {
          return params.id
        }
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
