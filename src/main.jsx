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
import Statistics from './components/Statistics/Statistics'
import NotFound from './components/NotFound/NotFound'

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
        path: "jobs/:id",
        element: <Details></Details>,
        loader: ({params}) => {
          return params.id
        }
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
