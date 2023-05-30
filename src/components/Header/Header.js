import React from 'react'
import './Header.css'
import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'


const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <NavbarTop />
        <NavbarBottom />
      </nav>
    </header>
  )
}

export default Header