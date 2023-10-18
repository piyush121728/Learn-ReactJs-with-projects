import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import ErrorPage from './components/ErrorPage/ErrorPage'

import Github, { githubInfoLoader } from './components/Github/Github'


/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement = {<ErrorPage/>}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:userId' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='/github'
        element={<Github />}
      />
    </Route >
  )
)

/*
To render a React element, first pass the DOM element to ReactDOM.createRoot(), 
then pass the React element to root.render():
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
