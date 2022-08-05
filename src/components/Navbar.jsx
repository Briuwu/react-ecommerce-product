import React, { useState } from 'react'
import Cart from '../components/Cart'
import Profile from '../components/Profile'

import MenuOpen from '../images/icon-menu.svg'
import MenuClose from '../images/icon-close.svg'
import Logo from '../images/logo.svg'


const Navbar = ({ addCart, setAddCart }) => {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(prev => !prev)
  }

  return (
    <nav className='navbar container'>
      <button onClick={handleMenu} className='navbar-menu'><img src={menu ? MenuClose : MenuOpen} alt="Menu" /></button>
      <img src={Logo} alt="Sneakers" className='navbar-logo' />
      <div className={menu ? 'backdrop' : ''}>
        
        <ul role='list' className={`navbar-items ${menu ? 'active' : ''}`}>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-order">
        <Cart addCart={addCart} setAddCart={setAddCart} />
        <Profile />
      </div>
    </nav>
  )
}

export default Navbar