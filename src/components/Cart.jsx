import React, { useState } from 'react'
import CartIcon from '../images/icon-cart-nav.svg'
import CartItems from './CartItems'

const Cart = ({ addCart, setAddCart }) => {
  const [openCart, setOpenCart] = useState(false)

  const handleOpenCart = () => {
    setOpenCart(!openCart)
  }
  return (
    <div className='cart'>
      <button onClick={handleOpenCart}><img src={CartIcon} alt="cart" className='cart-icon' /></button>

    {addCart.length > 0 && <span className="cart-count">{addCart.length}</span>} 
    {openCart && <CartItems addCart={addCart} setAddCart={setAddCart} />} 
    </div>
  )
}

export default Cart