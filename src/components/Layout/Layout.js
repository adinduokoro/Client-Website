import React from 'react'
import "./Layout.css"
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='App'>
      <div className='app__container'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout