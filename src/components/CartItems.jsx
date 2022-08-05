import React from 'react'
import Image1 from '../assets/images/image-product-1-thumbnail.jpg'
import IconDelete from '../images/icon-delete.svg'

const CartItems = ({ addCart, setAddCart }) => {

  const handleDelete = () => {
    addCart.map(item => {
      setAddCart(addCart.filter(el => el.id !== item.id))
    })
  }

  return (
    <div className='cart-items'>
      <p className='cart-items-head'>Cart</p>
      {addCart.length > 0 ?
      <div className='cart-items-all'>
        <img src={Image1} alt="" className='cart-items-icon' />
        <div className='cart-items-desc'>
          <p className="cart-items-title">Fall Limited Edition Sneakers</p>
          {addCart.map(item => (
            <p className='cart-items-price'>$125.00 x {item.cart_count} <span>${item.cart_count * 125}</span></p>
          ))}
        </div>
          <button onClick={handleDelete}><img src={IconDelete} alt="" /></button>
      </div> 
        :
      <p className='cart-items-empty'>Your cart is empty.</p>}
      {addCart.length > 0 && <button className='cart-items-checkout'>Check Out</button>}
    </div>
  )
}

export default CartItems