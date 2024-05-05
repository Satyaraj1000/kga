import React from 'react'
import { Outlet } from "react-router-dom";
import {Header,Footer} from './containers/index'

const App = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
